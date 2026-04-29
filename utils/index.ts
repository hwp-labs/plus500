export const isDev = () => process.env.NODE_ENV === "development";

export const isLocalhost = () => {
  if (!window) return;
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
};

export const sleep = (secs: number = 3) =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));

export const asMoney = (n?: null | number, noDp?: boolean) => {
  if (!n) return noDp ? "0" : "0.00";

  const [_v, _dp] = String(n).split(".");
  const v = Number(_v).toLocaleString();
  const dp = _dp ? (_dp.length < 2 ? `${_dp}0` : _dp) : "00";
  return noDp ? v : `${v}.${dp}`;
};

export const asMoneyIntl = (n?: null | number) =>
  n
    ? Intl.NumberFormat("en", {
        notation: "compact",
        minimumFractionDigits: 2,
      }).format(n)
    : 0;

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const getStartOfDate = (d?: string) => {
  const now = d ? new Date(d) : new Date();
  const utc = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  return new Date(utc).toISOString();
};

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidIp = (ip: string) => {
  const ipv4 =
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

  const ipv6 =
    /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$|^((?:[a-fA-F0-9]{1,4}:){1,7}:|:(?::[a-fA-F0-9]{1,4}){1,7})$/;

  return ipv4.test(ip) || ipv6.test(ip);
};
