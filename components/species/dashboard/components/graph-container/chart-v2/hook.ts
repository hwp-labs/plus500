import { useState, useRef, useEffect, useCallback } from "react";

interface Candle {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

const RAW_DATA: Candle[] = [
  { time: "15:50", open: 1705.1, high: 1705.32, low: 1704.8, close: 1705.0 },
  { time: "15:55", open: 1705.0, high: 1705.2, low: 1704.2, close: 1704.4 },
  { time: "16:00", open: 1704.4, high: 1704.6, low: 1703.2, close: 1703.5 },
  { time: "16:05", open: 1703.5, high: 1704.0, low: 1702.8, close: 1703.8 },
  { time: "16:10", open: 1703.8, high: 1705.1, low: 1703.6, close: 1704.9 },
  { time: "16:15", open: 1704.9, high: 1705.3, low: 1703.8, close: 1704.1 },
  { time: "16:20", open: 1704.1, high: 1704.5, low: 1703.5, close: 1703.7 },
  { time: "16:25", open: 1703.7, high: 1704.0, low: 1702.2, close: 1702.5 },
  { time: "16:30", open: 1702.5, high: 1702.8, low: 1701.9, close: 1702.1 },
  { time: "16:35", open: 1702.1, high: 1703.0, low: 1701.81, close: 1702.8 },
  { time: "16:39", open: 1704.66, high: 1704.69, low: 1704.42, close: 1704.56 },
  { time: "16:40", open: 1702.8, high: 1704.8, low: 1702.6, close: 1704.5 },
  { time: "16:45", open: 1704.5, high: 1705.4, low: 1704.2, close: 1705.2 },
  { time: "16:50", open: 1705.2, high: 1706.1, low: 1705.0, close: 1705.8 },
  { time: "16:55", open: 1705.8, high: 1706.4, low: 1705.5, close: 1706.1 },
  { time: "17:00", open: 1706.1, high: 1706.3, low: 1705.6, close: 1705.9 },
  { time: "17:05", open: 1705.9, high: 1706.1, low: 1705.2, close: 1705.4 },
  { time: "17:10", open: 1705.4, high: 1705.7, low: 1704.6, close: 1704.9 },
  { time: "17:15", open: 1704.9, high: 1705.1, low: 1704.3, close: 1704.38 },
];

const SELL_RATE = 1705.17;
const BUY_RATE = 1705.58;

export function useChartV2() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    candle: Candle;
    x: number;
    y: number;
  } | null>(null);
  const [crosshairX, setCrosshairX] = useState<number | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const DPR = window.devicePixelRatio || 1;
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;

    const ctx = canvas.getContext("2d")!;
    ctx.scale(DPR, DPR);

    const PAD = { l: 12, r: 72, t: 20, b: 32 };
    const plotW = W - PAD.l - PAD.r;
    const plotH = H - PAD.t - PAD.b;

    const closes = RAW_DATA.map((c) => c.close);
    const allLow = Math.min(...RAW_DATA.map((c) => c.low));
    const allHigh = Math.max(...RAW_DATA.map((c) => c.high));
    const range = allHigh - allLow;
    const yLo = allLow - range * 0.08;
    const yHi = allHigh + range * 0.08;

    const n = RAW_DATA.length;
    const xOf = (i: number) => PAD.l + (i / (n - 1)) * plotW;
    const yOf = (p: number) =>
      PAD.t + plotH - ((p - yLo) / (yHi - yLo)) * plotH;

    // background
    ctx.fillStyle = "#1e2c39";
    ctx.fillRect(0, 0, W, H);

    // grid lines
    const gridSteps = 8;
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= gridSteps; i++) {
      const y = PAD.t + (i / gridSteps) * plotH;
      ctx.beginPath();
      ctx.moveTo(PAD.l, y);
      ctx.lineTo(W - PAD.r, y);
      ctx.stroke();
    }
    const timeLabels = [
      "15:50",
      "16:00",
      "16:10",
      "16:20",
      "16:30",
      "16:40",
      "16:50",
      "17:00",
      "17:10",
    ];
    timeLabels.forEach((label) => {
      const idx = RAW_DATA.findIndex((c) => c.time === label);
      if (idx < 0) return;
      const x = xOf(idx);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(x, PAD.t);
      ctx.lineTo(x, PAD.t + plotH);
      ctx.stroke();
    });

    // sell rate line
    const sellY = yOf(SELL_RATE);
    ctx.strokeStyle = "#b57bee";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(PAD.l, sellY);
    ctx.lineTo(W - PAD.r, sellY);
    ctx.stroke();
    ctx.setLineDash([]);

    // "Current sell rate" label
    ctx.fillStyle = "white";
    ctx.font = "11px monospace";
    ctx.fillText("Current sell rate", PAD.l + 6, sellY - 5);

    // line chart path
    ctx.beginPath();
    closes.forEach((close, i) => {
      const x = xOf(i);
      const y = yOf(close);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1.5;
    ctx.lineJoin = "round";
    ctx.stroke();

    // area fill under line
    ctx.lineTo(xOf(n - 1), PAD.t + plotH);
    ctx.lineTo(xOf(0), PAD.t + plotH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, PAD.t, 0, PAD.t + plotH);
    grad.addColorStop(0, "rgba(255,255,255,0.07)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fill();

    // crosshair vertical
    if (crosshairX !== null) {
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(crosshairX, PAD.t);
      ctx.lineTo(crosshairX, PAD.t + plotH);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Y-axis price labels
    for (let i = 0; i <= gridSteps; i++) {
      const p = yLo + ((gridSteps - i) / gridSteps) * (yHi - yLo);
      const y = PAD.t + (i / gridSteps) * plotH;
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = "10px monospace";
      ctx.textAlign = "left";
      ctx.fillText(p.toFixed(2), W - PAD.r + 6, y + 3);
    }

    // sell price badge on Y axis
    const badgeY = yOf(SELL_RATE);
    ctx.fillStyle = "#4caf82";
    roundRect(ctx, W - PAD.r + 2, badgeY - 9, 62, 17, 3);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 10px monospace";
    ctx.textAlign = "center";
    ctx.fillText(SELL_RATE.toFixed(2), W - PAD.r + 33, badgeY + 4);

    // current price badge
    const curY = yOf(RAW_DATA[n - 1].close);
    ctx.fillStyle = "#2a6049";
    roundRect(ctx, W - PAD.r + 2, curY - 9, 62, 17, 3);
    ctx.fill();
    ctx.fillStyle = "#8ef0c0";
    ctx.font = "bold 10px monospace";
    ctx.textAlign = "center";
    ctx.fillText(RAW_DATA[n - 1].close.toFixed(2), W - PAD.r + 33, curY + 4);

    // X-axis time labels
    ctx.textAlign = "center";
    timeLabels.forEach((label) => {
      const idx = RAW_DATA.findIndex((c) => c.time === label);
      if (idx < 0) return;
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = "10px monospace";
      ctx.fillText(label, xOf(idx), PAD.t + plotH + 18);
    });

    // crosshair time badge
    if (tooltip) {
      const idx = RAW_DATA.indexOf(tooltip.candle);
      const x = xOf(idx);
      ctx.fillStyle = "#3a4460";
      roundRect(ctx, x - 36, PAD.t + plotH + 4, 72, 16, 3);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`9/14 ${tooltip.candle.time}`, x, PAD.t + plotH + 15);
    }
  }, [crosshairX, tooltip]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    const ro = new ResizeObserver(() => draw());
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, [draw]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const W = wrap.clientWidth;
    const PAD = { l: 12, r: 72 };
    const plotW = W - PAD.l - PAD.r;
    const n = RAW_DATA.length;
    const idx = Math.round(((mx - PAD.l) / plotW) * (n - 1));
    if (idx >= 0 && idx < n) {
      setCrosshairX(PAD.l + (idx / (n - 1)) * plotW);
      setTooltip({ candle: RAW_DATA[idx], x: mx, y: my });
    }
  };

  const handleMouseLeave = () => {
    setTooltip(null);
    setCrosshairX(null);
  };

  return { wrapRef, canvasRef, handleMouseMove, handleMouseLeave, tooltip };
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
