// https://hexcolorpedia.com/color/?q=0c2780

export const COLOR = {
  white: "#ffffff",
  black: "#171717",
  primary: {
    100: "#d6ddf5",
    200: "#adbaea",
    300: "#8498e0",
    400: "#5b75d5",
    500: "#0c2780", // base navy blue
    600: "#0a2270",
    700: "#081b59",
    800: "#061443",
    900: "#04102e",
  },
  secondary: {
    100: "#d6eaff",
    200: "#aed4ff",
    300: "#85beff",
    400: "#5ca8ff",
    500: "#2e86fe", // base blue
    600: "#1a6cd8",
    700: "#1153aa",
    800: "#0b3d80",
    900: "#062857",
  },
  tertiary: {
    100: "#d6f0ff",
    200: "#ade0ff",
    300: "#84d1ff",
    400: "#5bc1ff",
    500: "#11afff", // base cyan
    600: "#0e9be6",
    700: "#0b7db8",
    800: "#08608a",
    900: "#05435c",
  },
  info: "oklch(0.488 0.243 264.376)",
  success: "oklch(0.696 0.17 162.48)",
  warning: "oklch(0.769 0.188 70.08)",
  danger: "oklch(0.645 0.246 16.439)",
} as const;
