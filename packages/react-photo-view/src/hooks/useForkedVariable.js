import { useRef, useMemo } from 'react';
/**
 * 逻辑分叉变量处理
 * 此 hook 不触发额外渲染
 */
export default function useForkedVariable(initial, updater) {
    // 初始分叉变量
    const forkedRef = useRef(initial);
    function modify(next) {
        forkedRef.current = next;
    }
    useMemo(() => {
        // 参数变化之后同步内部分叉变量
        updater(modify);
    }, [initial]);
    return [forkedRef.current, modify];
}
