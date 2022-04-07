import { useEffect } from "react";

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
};

export { useScrollToTop };
