import { useEffect, useRef } from 'react';
export default function useEventListener(type, fn, options) {
    const latest = useRef(fn);
    latest.current = fn;
    useEffect(() => {
        function wrapper(evt) {
            latest.current(evt);
        }
        if (type) {
            window.addEventListener(type, wrapper, options);
        }
        return () => {
            if (type) {
                window.removeEventListener(type, wrapper);
            }
        };
    }, [type]);
}
