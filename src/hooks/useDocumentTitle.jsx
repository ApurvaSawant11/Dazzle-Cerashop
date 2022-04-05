import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Cerashop | ${title}`;
  }, [title]);
};

export { useDocumentTitle };
