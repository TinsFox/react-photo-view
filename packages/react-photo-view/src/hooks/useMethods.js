import { useRef } from 'react';
/**
 * Hook of persistent methods
 */
export default function useMethods(fn) {
    const { current } = useRef({
        fn,
        curr: undefined,
    });
    current.fn = fn;
    if (!current.curr) {
        const curr = Object.create(null);
        Object.keys(fn).forEach((key) => {
            curr[key] = (...args) => current.fn[key].call(current.fn, ...args);
        });
        current.curr = curr;
    }
    return current.curr;
}
