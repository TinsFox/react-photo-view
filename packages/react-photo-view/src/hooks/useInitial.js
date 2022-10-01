import { useRef } from 'react';
export default function useInitial(callback) {
    const { current } = useRef({ sign: false, fn: undefined });
    if (!current.sign) {
        current.sign = true;
        current.fn = callback();
    }
    return current.fn;
}
