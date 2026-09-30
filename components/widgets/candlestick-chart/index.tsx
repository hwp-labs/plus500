import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

/* ================= data ================= */
export interface Candle {
  t: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface SymbolInfo {
  id: string;
  label: string;
  name: string;
  exchange: string;
  base: number; // starting price for the mock generator
  vol: number; // hourly volatility (fraction)
  decimals: number;
  volume: number; // typical volume per bar
}

export const SYMBOLS: SymbolInfo[] = [
  { id: "BTCUSD", label: "BTC/USD", name: "Bitcoin / US Dollar", exchange: "CRYPTO", base: 67000, vol: 0.006, decimals: 2, volume: 1800 },
  { id: "ETHUSD", label: "ETH/USD", name: "Ethereum / US Dollar", exchange: "CRYPTO", base: 3400, vol: 0.007, decimals: 2, volume: 24000 },
  { id: "GBPUSD", label: "GBP/USD", name: "British Pound / US Dollar", exchange: "FX", base: 1.27, vol: 0.0012, decimals: 4, volume: 52000 },
  { id: "EURUSD", label: "EUR/USD", name: "Euro / US Dollar", exchange: "FX", base: 1.08, vol: 0.001, decimals: 4, volume: 61000 },
  { id: "XAUUSD", label: "XAU/USD", name: "Gold / US Dollar", exchange: "OANDA", base: 2350, vol: 0.0018, decimals: 2, volume: 18000 },
  { id: "AAPL", label: "AAPL", name: "Apple Inc", exchange: "NASDAQ", base: 190, vol: 0.0025, decimals: 2, volume: 740000 },
  { id: "TSLA", label: "TSLA", name: "Tesla Inc", exchange: "NASDAQ", base: 250, vol: 0.0045, decimals: 2, volume: 950000 },
  { id: "NVDA", label: "NVDA", name: "NVIDIA Corp", exchange: "NASDAQ", base: 120, vol: 0.0038, decimals: 2, volume: 1200000 },
  { id: "MSFT", label: "MSFT", name: "Microsoft Corp", exchange: "NASDAQ", base: 420, vol: 0.002, decimals: 2, volume: 420000 },
];

export type Timeframe = "1h" | "4h" | "1D" | "1W";
export const TIMEFRAMES: Record<Timeframe, number> = {
  "1h": 3_600_000,
  "4h": 14_400_000,
  "1D": 86_400_000,
  "1W": 604_800_000,
};

/* ---------- deterministic mock data (swap for a real API, see fetchCandles) ---------- */

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hash = (s: string) => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 7);
const gauss = (r: () => number) =>
  Math.sqrt(-2 * Math.log(r() || 1e-9)) * Math.cos(2 * Math.PI * r());

const sigmaOf = (s: SymbolInfo, step: number) => s.vol * Math.sqrt(step / 3_600_000);

export function generateCandles(s: SymbolInfo, tf: Timeframe, count = 160): Candle[] {
  const rnd = mulberry32(hash(s.id + tf));
  const step = TIMEFRAMES[tf];
  const sigma = sigmaOf(s, step);
  const end = Math.floor(Date.now() / step) * step;
  let price = s.base;
  let trend = 0;
  const out: Candle[] = [];
  for (let i = 0; i < count; i++) {
    trend = trend * 0.94 + gauss(rnd) * sigma * 0.18;
    const sg = sigma * (0.7 + rnd() * 0.9);
    const open = price;
    const close = open * (1 + trend + gauss(rnd) * sg);
    const high = Math.max(open, close) * (1 + rnd() * sg * 0.6);
    const low = Math.min(open, close) * (1 - rnd() * sg * 0.6);
    const volume = s.volume * (0.4 + rnd() * 1.2) * (1 + Math.abs(close / open - 1) / sigma);
    out.push({ t: end - (count - 1 - i) * step, open, high, low, close, volume });
    price = close;
  }
  return out;
}

/** Simulates a live tick: updates the last candle, or opens a new one when the bar rolls over. */
export function tickCandles(prev: Candle[], s: SymbolInfo, tf: Timeframe): Candle[] {
  const step = TIMEFRAMES[tf];
  const last = prev[prev.length - 1];
  const sigma = sigmaOf(s, step);
  if (Date.now() >= last.t + step) {
    const open = last.close;
    const fresh: Candle = { t: last.t + step, open, high: open, low: open, close: open, volume: 0 };
    return [...prev.slice(1), fresh];
  }
  const close = last.close * (1 + gauss(Math.random) * sigma * 0.12);
  const next: Candle = {
    ...last,
    close,
    high: Math.max(last.high, close),
    low: Math.min(last.low, close),
    volume: last.volume + s.volume * 0.02 * Math.random(),
  };
  return [...prev.slice(0, -1), next];
}

/**
 * Replace generateCandles with real data. Example for crypto (Binance public API, no key):
 *
 * export async function fetchCandles(symbol: string, tf: Timeframe): Promise<Candle[]> {
 *   const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}T&interval=${tf.toLowerCase()}&limit=160`);
 *   const rows: any[][] = await res.json();
 *   return rows.map(r => ({ t: r[0], open: +r[1], high: +r[2], low: +r[3], close: +r[4], volume: +r[5] }));
 * }
 * Stocks/FX need a provider key (Twelve Data, Polygon, Alpha Vantage, etc.).
 */

/* ================= indicators ================= */

/** NaN = no value yet (warm-up period). */
export type Series = number[];
const nans = (n: number): Series => Array<number>(n).fill(NaN);

export function sma(v: Series, n: number): Series {
  const out = nans(v.length);
  let sum = 0;
  for (let i = 0; i < v.length; i++) {
    sum += v[i];
    if (i >= n) sum -= v[i - n];
    if (i >= n - 1) out[i] = sum / n;
  }
  return out;
}

export function ema(v: Series, n: number): Series {
  const out = nans(v.length);
  const k = 2 / (n + 1);
  let prev = NaN;
  for (let i = 0; i < v.length; i++) {
    if (isNaN(v[i])) continue;
    prev = isNaN(prev) ? v[i] : v[i] * k + prev * (1 - k);
    out[i] = prev;
  }
  return out;
}

export function bollinger(c: Candle[], n = 20, mult = 2) {
  const close = c.map((x) => x.close);
  const basis = sma(close, n);
  const upper = nans(c.length);
  const lower = nans(c.length);
  for (let i = n - 1; i < c.length; i++) {
    let s = 0;
    for (let j = i - n + 1; j <= i; j++) s += (close[j] - basis[i]) ** 2;
    const sd = Math.sqrt(s / n);
    upper[i] = basis[i] + mult * sd;
    lower[i] = basis[i] - mult * sd;
  }
  return { upper, basis, lower };
}

export function aroon(c: Candle[], n = 14) {
  const up = nans(c.length);
  const down = nans(c.length);
  for (let i = n; i < c.length; i++) {
    let hi = i - n;
    let lo = i - n;
    for (let j = i - n; j <= i; j++) {
      if (c[j].high >= c[hi].high) hi = j;
      if (c[j].low <= c[lo].low) lo = j;
    }
    up[i] = (100 * (n - (i - hi))) / n;
    down[i] = (100 * (n - (i - lo))) / n;
  }
  return { up, down };
}

export function chaikinOsc(c: Candle[], fast = 3, slow = 10): Series {
  let adl = 0;
  const line = c.map((x) => {
    const range = x.high - x.low;
    const mfm = range === 0 ? 0 : (x.close - x.low - (x.high - x.close)) / range;
    adl += mfm * x.volume;
    return adl;
  });
  const f = ema(line, fast);
  const s = ema(line, slow);
  return f.map((v, i) => v - s[i]);
}

export function klinger(c: Candle[], fast = 34, slow = 55, sig = 13) {
  const vf = nans(c.length);
  let trend = 1;
  let cm = 0;
  let prevDm = 0;
  for (let i = 1; i < c.length; i++) {
    const hlc = c[i].high + c[i].low + c[i].close;
    const prevHlc = c[i - 1].high + c[i - 1].low + c[i - 1].close;
    const nextTrend = hlc > prevHlc ? 1 : -1;
    const dm = c[i].high - c[i].low;
    cm = nextTrend === trend ? cm + dm : prevDm + dm;
    trend = nextTrend;
    prevDm = dm;
    vf[i] = cm === 0 ? 0 : c[i].volume * Math.abs(2 * (dm / cm) - 1) * trend * 100;
  }
  const f = ema(vf, fast);
  const s = ema(vf, slow);
  const kvo = f.map((v, i) => v - s[i]);
  return { kvo, signal: ema(kvo, sig) };
}

/* ================= draw ================= */

export interface ChartData {
  candles: Candle[];
  bb: { upper: Series; basis: Series; lower: Series };
  aroon: { up: Series; down: Series };
  chaikin: Series;
  klinger: { kvo: Series; signal: Series };
}
export interface Crosshair { i: number; x: number; y: number }
export interface DrawOpts {
  width: number;
  height: number;
  dpr: number;
  mode: "area" | "candles";
  decimals: number;
  step: number;
  cross: Crosshair | null;
}

export const AXIS_W = 66;
const XAXIS_H = 26;
const WEIGHTS = [0.46, 0.18, 0.18, 0.18];
const FONT = '11px Inter, "Segoe UI", system-ui, sans-serif';

const C = {
  bg0: "#0d0d10", bg1: "#1a1030", grid: "rgba(255,255,255,0.045)", sep: "rgba(255,255,255,0.12)",
  axis: "#8b8fa3", text: "#d6d8e3", blue: "#3b82f6", up: "#22c08a", down: "#f2495c",
  purple: "#a259ff", lightBlue: "#4d8dff", orange: "#ff9f1a", red: "#ff4d5e",
  indigo: "#4f6bff", teal: "#2dd4bf", cross: "rgba(255,255,255,0.35)", tag: "#434657",
};

export const paneRects = (h: number) => {
  const total = h - XAXIS_H;
  let y = 0;
  return WEIGHTS.map((w) => {
    const top = y;
    y += total * w;
    return { top, bottom: y };
  });
};

/* ---------- helpers ---------- */
export const fmtCompact = (v: number, d = 2) => {
  if (isNaN(v)) return "–";
  const a = Math.abs(v);
  if (a >= 1e9) return (v / 1e9).toFixed(d) + "B";
  if (a >= 1e6) return (v / 1e6).toFixed(d) + "M";
  if (a >= 1e3) return (v / 1e3).toFixed(d) + "K";
  return v.toFixed(d);
};
const pct = (v: number) => (isNaN(v) ? "–" : v.toFixed(2) + "%");

function extent(...arrs: Series[]): [number, number] {
  let min = Infinity, max = -Infinity;
  for (const a of arrs) for (const v of a) if (!isNaN(v)) { if (v < min) min = v; if (v > max) max = v; }
  return [min, max];
}

function niceTicks(min: number, max: number, target: number) {
  const raw = (max - min || 1) / target;
  const p = 10 ** Math.floor(Math.log10(raw));
  const f = raw / p;
  const step = (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p;
  const out: number[] = [];
  for (let k = Math.ceil(min / step); k * step <= max; k++) out.push(k * step);
  return out;
}

export const fmtTime = (t: number, step: number) => {
  const d = new Date(t);
  if (step < 864e5)
    return d.getHours() === 0 && d.getMinutes() === 0
      ? d.toLocaleDateString("en-GB", { day: "numeric", month: "short" })
      : d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
};
const fmtFull = (t: number, step: number) =>
  new Date(t).toLocaleString("en-GB", {
    day: "numeric", month: "short", year: "2-digit",
    ...(step < 864e5 ? { hour: "2-digit", minute: "2-digit" } : {}),
  });

function line(
  ctx: CanvasRenderingContext2D, v: Series, X: (i: number) => number, Y: (v: number) => number,
  color: string, width = 1.5, glow = 0,
) {
  ctx.save();
  ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineJoin = "round";
  if (glow) { ctx.shadowColor = color; ctx.shadowBlur = glow; }
  ctx.beginPath();
  let pen = false;
  v.forEach((val, i) => {
    if (isNaN(val)) { pen = false; return; }
    if (pen) ctx.lineTo(X(i), Y(val)); else { ctx.moveTo(X(i), Y(val)); pen = true; }
  });
  ctx.stroke();
  ctx.restore();
}

function tag(ctx: CanvasRenderingContext2D, text: string, y: number, color: string, W: number) {
  const w = AXIS_W - 4;
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.roundRect(W - AXIS_W + 2, y - 9, w, 18, 3); ctx.fill();
  ctx.fillStyle = "#fff"; ctx.textAlign = "center";
  ctx.fillText(text, W - AXIS_W + 2 + w / 2, y + 4);
}

/* ---------- main renderer ---------- */
export function drawChart(ctx: CanvasRenderingContext2D, d: ChartData, o: DrawOpts) {
  const { width: W, height: H } = o;
  const { candles } = d;
  const n = candles.length;
  const plotW = W - AXIS_W;
  const bw = plotW / n;
  const X = (i: number) => (i + 0.5) * bw;
  const idx = o.cross ? o.cross.i : n - 1;
  const rects = paneRects(H);
  const scales: { top: number; bottom: number; toVal: (y: number) => number; fmt: (v: number) => string }[] = [];

  ctx.setTransform(o.dpr, 0, 0, o.dpr, 0, 0);
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, C.bg0); bg.addColorStop(1, C.bg1);
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  ctx.font = FONT;

  // vertical grid + time labels
  const k = Math.max(1, Math.ceil(72 / bw));
  ctx.strokeStyle = C.grid; ctx.fillStyle = C.axis; ctx.textAlign = "center"; ctx.lineWidth = 1;
  for (let i = k - 1; i < n; i += k) {
    const x = Math.round(X(i)) + 0.5;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H - XAXIS_H); ctx.stroke();
    ctx.fillText(fmtTime(candles[i].t, o.step), X(i), H - 9);
  }

  const setup = (p: number, min: number, max: number, padTop: number, padBot: number, fmt: (v: number) => string, ticks: number[]) => {
    const r = rects[p];
    const top = r.top + padTop, bot = r.bottom - padBot;
    const Y = (v: number) => bot - ((v - min) / (max - min)) * (bot - top);
    scales.push({ top: r.top, bottom: r.bottom, toVal: (y) => min + ((bot - y) / (bot - top)) * (max - min), fmt });
    ctx.textAlign = "left"; ctx.fillStyle = C.axis; ctx.strokeStyle = C.grid;
    for (const t of ticks) {
      const y = Math.round(Y(t)) + 0.5;
      if (y < r.top + 6 || y > r.bottom - 6) continue;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(plotW, y); ctx.stroke();
      ctx.fillText(fmt(t), plotW + 8, y + 4);
    }
    ctx.strokeStyle = C.sep;
    ctx.beginPath(); ctx.moveTo(0, r.bottom + 0.5); ctx.lineTo(W, r.bottom + 0.5); ctx.stroke();
    return Y;
  };
  const clip = (p: number, fn: () => void) => {
    ctx.save(); ctx.beginPath(); ctx.rect(0, rects[p].top, plotW, rects[p].bottom - rects[p].top); ctx.clip(); fn(); ctx.restore();
  };
  const legend = (p: number, parts: [string, string][]) => {
    let x = 8; ctx.textAlign = "left";
    for (const [t, c] of parts) { ctx.fillStyle = c; ctx.fillText(t, x, rects[p].top + 16); x += ctx.measureText(t).width + 8; }
  };

  /* ---- pane 0: price + bollinger + volume ---- */
  {
    const [mn, mx] = extent(candles.map((c) => c.low), candles.map((c) => c.high), d.bb.upper, d.bb.lower);
    const pad = (mx - mn) * 0.06;
    const min = mn - pad, max = mx + pad;
    const Y = setup(0, min, max, 46, 10, (v) => v.toFixed(o.decimals), niceTicks(min, max, 6));
    const r = rects[0];
    const maxVol = Math.max(...candles.map((c) => c.volume));
    clip(0, () => {
      candles.forEach((c, i) => {
        const h = (c.volume / maxVol) * (r.bottom - r.top) * 0.16;
        ctx.fillStyle = c.close >= c.open ? "rgba(34,192,138,0.45)" : "rgba(77,141,255,0.45)";
        ctx.fillRect(X(i) - bw * 0.3, r.bottom - h, bw * 0.6, h);
      });
      if (o.mode === "area") {
        const g = ctx.createLinearGradient(0, r.top, 0, r.bottom);
        g.addColorStop(0, "rgba(59,130,246,0.40)"); g.addColorStop(1, "rgba(59,130,246,0)");
        ctx.beginPath();
        candles.forEach((c, i) => (i ? ctx.lineTo(X(i), Y(c.close)) : ctx.moveTo(X(i), Y(c.close))));
        ctx.lineTo(X(n - 1), r.bottom); ctx.lineTo(X(0), r.bottom); ctx.closePath();
        ctx.fillStyle = g; ctx.fill();
        line(ctx, candles.map((c) => c.close), X, Y, C.blue, 2, 6);
      } else {
        const cw = Math.max(1, bw * 0.66);
        ctx.lineWidth = 1;
        candles.forEach((c, i) => {
          const col = c.close >= c.open ? C.up : C.down;
          ctx.fillStyle = col; ctx.strokeStyle = col;
          ctx.beginPath(); ctx.moveTo(X(i), Y(c.high)); ctx.lineTo(X(i), Y(c.low)); ctx.stroke();
          const yo = Y(c.open), yc = Y(c.close);
          ctx.fillRect(X(i) - cw / 2, Math.min(yo, yc), cw, Math.max(1, Math.abs(yo - yc)));
        });
      }
      line(ctx, d.bb.upper, X, Y, C.purple, 1.3);
      line(ctx, d.bb.basis, X, Y, C.lightBlue, 1.3);
      line(ctx, d.bb.lower, X, Y, C.orange, 1.3);
    });
    const last = candles[n - 1];
    tag(ctx, last.close.toFixed(o.decimals), Y(last.close), last.close >= last.open ? C.up : C.down, W);
  }

  /* ---- pane 1: aroon ---- */
  {
    const Y = setup(1, 0, 100, 26, 8, pct, [0, 50, 100]);
    clip(1, () => { line(ctx, d.aroon.up, X, Y, C.orange, 1.3); line(ctx, d.aroon.down, X, Y, C.indigo, 1.3); });
    legend(1, [["Aroon", C.text], ["14", C.axis], [pct(d.aroon.up[idx]), C.orange], [pct(d.aroon.down[idx]), C.indigo]]);
    if (!isNaN(d.aroon.up[idx])) tag(ctx, pct(d.aroon.up[idx]), Y(d.aroon.up[idx]), "#d98200", W);
    if (!isNaN(d.aroon.down[idx])) tag(ctx, pct(d.aroon.down[idx]), Y(d.aroon.down[idx]), "#3552e0", W);
  }

  /* ---- pane 2: chaikin oscillator ---- */
  {
    const [mn, mx] = extent(d.chaikin);
    const pad = (mx - mn) * 0.12;
    const min = mn - pad, max = mx + pad;
    const Y = setup(2, min, max, 26, 8, (v) => fmtCompact(v, 0), niceTicks(min, max, 3));
    clip(2, () => {
      if (min < 0 && max > 0) {
        ctx.save(); ctx.setLineDash([3, 4]); ctx.strokeStyle = C.sep;
        ctx.beginPath(); ctx.moveTo(0, Y(0)); ctx.lineTo(plotW, Y(0)); ctx.stroke(); ctx.restore();
      }
      line(ctx, d.chaikin, X, Y, C.red, 1.8, 8);
    });
    legend(2, [["Chaikin Osc", C.text], ["3 10", C.axis], [fmtCompact(d.chaikin[idx], 3), C.red]]);
    if (!isNaN(d.chaikin[idx])) tag(ctx, fmtCompact(d.chaikin[idx], 2), Y(d.chaikin[idx]), "#e0465a", W);
  }

  /* ---- pane 3: klinger oscillator ---- */
  {
    const [mn, mx] = extent(d.klinger.kvo, d.klinger.signal);
    const pad = (mx - mn) * 0.12;
    const min = mn - pad, max = mx + pad;
    const Y = setup(3, min, max, 26, 8, (v) => fmtCompact(v, 0), niceTicks(min, max, 3));
    clip(3, () => {
      line(ctx, d.klinger.kvo, X, Y, C.indigo, 1.8, 6);
      line(ctx, d.klinger.signal, X, Y, C.teal, 1.8, 6);
    });
    legend(3, [["Klinger Oscillator", C.text], [fmtCompact(d.klinger.kvo[idx], 3), C.indigo], [fmtCompact(d.klinger.signal[idx], 3), C.teal]]);
    if (!isNaN(d.klinger.kvo[idx])) tag(ctx, fmtCompact(d.klinger.kvo[idx], 2), Y(d.klinger.kvo[idx]), "#3b6cf0", W);
    if (!isNaN(d.klinger.signal[idx])) tag(ctx, fmtCompact(d.klinger.signal[idx], 2), Y(d.klinger.signal[idx]), "#14a898", W);
  }

  /* ---- crosshair ---- */
  if (o.cross) {
    const { i, y } = o.cross;
    const x = Math.round(X(i)) + 0.5;
    ctx.save();
    ctx.setLineDash([4, 4]); ctx.strokeStyle = C.cross; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H - XAXIS_H); ctx.stroke();
    const sc = scales.find((s) => y >= s.top && y < s.bottom);
    if (sc) {
      ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(plotW, y + 0.5); ctx.stroke();
      ctx.setLineDash([]);
      tag(ctx, sc.fmt(sc.toVal(y)), y, C.tag, W);
    }
    ctx.restore();
    const label = fmtFull(candles[i].t, o.step);
    const w = ctx.measureText(label).width + 16;
    const lx = Math.min(Math.max(X(i) - w / 2, 0), plotW - w);
    ctx.fillStyle = C.tag;
    ctx.beginPath(); ctx.roundRect(lx, H - XAXIS_H + 3, w, 18, 3); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.textAlign = "center";
    ctx.fillText(label, lx + w / 2, H - XAXIS_H + 16);
  }
}

/* ================= hook ================= */

export const useCandlestickChart = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [symbolId, setSymbolId] = useState("AAPL");
  const [tf, setTf] = useState<Timeframe>("1D");
  const [mode, setMode] = useState<"area" | "candles">("area");
  const [live, setLive] = useState(true);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [cross, setCross] = useState<Crosshair | null>(null);

  const symbol = useMemo(() => SYMBOLS.find((s) => s.id === symbolId) ?? SYMBOLS[0], [symbolId]);
  const [candles, setCandles] = useState(() => generateCandles(symbol, tf));

  // reload on symbol / timeframe change  (replace with an async fetch for real data)
  useEffect(() => {
    setCandles(generateCandles(symbol, tf));
    setCross(null);
  }, [symbol, tf]);

  // simulated live ticks
  useEffect(() => {
    if (!live) return;
    const id = setInterval(() => setCandles((p) => tickCandles(p, symbol, tf)), 1000);
    return () => clearInterval(id);
  }, [live, symbol, tf]);

  const data = useMemo(
    () => ({
      candles,
      bb: bollinger(candles),
      aroon: aroon(candles),
      chaikin: chaikinOsc(candles),
      klinger: klinger(candles),
    }),
    [candles],
  );

  // responsive size
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // paint
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !size.w || !size.h) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size.w * dpr;
    canvas.height = size.h * dpr;
    canvas.style.width = `${size.w}px`;
    canvas.style.height = `${size.h}px`;
    drawChart(ctx, data, { width: size.w, height: size.h, dpr, mode, decimals: symbol.decimals, step: TIMEFRAMES[tf], cross });
  }, [data, size, mode, symbol, tf, cross]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const plotW = size.w - AXIS_W;
      if (x < 0 || x > plotW) return setCross(null);
      const i = Math.min(candles.length - 1, Math.max(0, Math.floor(x / (plotW / candles.length))));
      setCross({ i, x, y });
    },
    [size.w, candles.length],
  );
  const handleMouseLeave = useCallback(() => setCross(null), []);

  const idx = cross ? cross.i : candles.length - 1;
  const candle = candles[idx];
  const prevClose = candles[idx - 1]?.close ?? candle.open;
  const change = candle.close - prevClose;
  const tooltip = cross ? { x: cross.x, y: cross.y, candle } : null;

  return {
    wrapRef, canvasRef, handleMouseMove, handleMouseLeave, tooltip,
    symbol, setSymbolId, tf, setTf, mode, setMode, live, setLive,
    candle, change, changePct: (change / prevClose) * 100,
  };
};

/* ================= component ================= */

const btn = (active: boolean): CSSProperties => ({
  background: active ? "rgba(77,141,255,0.18)" : "transparent",
  color: active ? "#7fb0ff" : "#b4b8c8",
  border: "none",
  borderRadius: 6,
  padding: "6px 10px",
  fontSize: 13,
  cursor: "pointer",
});

export const CandlestickChart = () => {
  const c = useCandlestickChart();
  const { symbol, candle, change, changePct, tooltip, wrapRef } = c;
  const dec = symbol.decimals;
  const color = change >= 0 ? "#22c08a" : "#f2495c";
  const sign = change >= 0 ? "+" : "";

  return (
    <div
      style={{
        padding: 2,
        borderRadius: 18,
        background: "linear-gradient(135deg,#00d4ff,#8a2be2 55%,#ff00c8)",
        fontFamily: 'Inter, "Segoe UI", system-ui, sans-serif',
      }}
    >
      <div style={{ background: "#0d0d10", borderRadius: 16, overflow: "hidden", color: "#e6e8f0" }}>
        {/* toolbar */}
        <div
          style={{
            display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6,
            padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <select
            value={symbol.id}
            onChange={(e) => c.setSymbolId(e.target.value)}
            aria-label="Symbol"
            style={{
              background: "#1b1b22", color: "#fff", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 6, padding: "6px 10px", fontSize: 13,
            }}
          >
            {SYMBOLS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>

          <span style={{ width: 1, height: 20, background: "rgba(255,255,255,0.12)", margin: "0 6px" }} />
          {(Object.keys(TIMEFRAMES) as Timeframe[]).map((t) => (
            <button key={t} style={btn(c.tf === t)} onClick={() => c.setTf(t)}>{t}</button>
          ))}

          <span style={{ width: 1, height: 20, background: "rgba(255,255,255,0.12)", margin: "0 6px" }} />
          <button style={btn(c.mode === "area")} onClick={() => c.setMode("area")}>Area</button>
          <button style={btn(c.mode === "candles")} onClick={() => c.setMode("candles")}>Candles</button>

          <button style={{ ...btn(c.live), marginLeft: "auto" }} onClick={() => c.setLive(!c.live)}>
            {c.live ? "● Live" : "○ Paused"}
          </button>
        </div>

        {/* chart */}
        <div ref={wrapRef} style={{ position: "relative", width: "100%", height: 640 }}>
          <canvas
            ref={c.canvasRef}
            onMouseMove={c.handleMouseMove}
            onMouseLeave={c.handleMouseLeave}
            style={{ display: "block", cursor: "crosshair" }}
          />

          {/* OHLC legend */}
          <div style={{ position: "absolute", left: 10, top: 8, pointerEvents: "none", fontSize: 13, lineHeight: 1.5 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "baseline" }}>
              <strong style={{ fontSize: 15 }}>{symbol.name}</strong>
              <span style={{ color: "#8b8fa3" }}>{c.tf} · {symbol.exchange}</span>
              {(
                [["O", candle.open], ["H", candle.high], ["L", candle.low], ["C", candle.close]] as const
              ).map(([l, v]) => (
                <span key={l} style={{ color }}>
                  <span style={{ color: "#8b8fa3" }}>{l} </span>{v.toFixed(dec)}
                </span>
              ))}
              <span style={{ color }}>{sign}{change.toFixed(dec)} ({sign}{changePct.toFixed(2)}%)</span>
            </div>
            <div style={{ color: "#22c08a" }}>
              <span style={{ color: "#8b8fa3" }}>Vol </span>{fmtCompact(candle.volume)}
            </div>
          </div>

          {/* tooltip */}
          {tooltip && (
            <div
              style={{
                position: "absolute",
                left: Math.min(tooltip.x + 16, (wrapRef.current?.clientWidth ?? 500) - 220),
                top: Math.max(tooltip.y - 100, 60),
                background: "rgba(75,130,202,0.92)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 6,
                padding: "10px 14px",
                fontSize: 13,
                color: "#fff",
                pointerEvents: "none",
                minWidth: 200,
              }}
            >
              {(
                [
                  ["Date/Time", fmtTime(tooltip.candle.t, TIMEFRAMES[c.tf]) + " " + new Date(tooltip.candle.t).toLocaleDateString("en-GB")],
                  ["Close", tooltip.candle.close.toFixed(dec)],
                  ["Open", tooltip.candle.open.toFixed(dec)],
                  ["High", tooltip.candle.high.toFixed(dec)],
                  ["Low", tooltip.candle.low.toFixed(dec)],
                  ["Volume", fmtCompact(tooltip.candle.volume)],
                ] as const
              ).map(([label, val], i) => (
                <div
                  key={label}
                  style={{
                    display: "flex", justifyContent: "space-between", gap: 16, padding: "2px 6px", margin: "0 -6px",
                    background: i % 2 === 0 ? "rgba(255,255,255,0.08)" : "transparent", borderRadius: 3,
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>{label}:</span>
                  <strong>{val}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
