// useDocumentTitle.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDocumentTitle = (title: string) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [title, location]);
};

export default useDocumentTitle;