import { useEffect, useState } from "react";

export function useIsMobile(breakPoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakPoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < breakPoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < breakPoint);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
