import { useEffect } from "react";

// a custom hook to update the document title
// based on the passed count value
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
}

export default useDocumentTitle;
