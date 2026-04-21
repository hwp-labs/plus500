interface Params {
  width?: number;
  height?: number;
  scrollbars?: "yes" | "no";
  resizable?: "yes" | "no";
}

export function usePopupWindow(params?: Params) {
  const open = (url: string) => {
    if (window) {
      window.open(
        url,
        "_blank",
        `width=${params?.width || 500},
        height=${params?.height || 550},
        scrollbars=${params?.scrollbars || "yes"},
        resizable=${params?.resizable || "yes"}`,
      );
    }
  };

  return open;
}
