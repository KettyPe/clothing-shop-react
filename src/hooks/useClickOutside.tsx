import { useEffect } from "react";

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void, active = true) => {
    useEffect(() => {
        if (!active) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback, active]);
};
