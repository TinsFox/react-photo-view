import { useRef } from 'react';
import useSetState from './useSetState';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
import useDebounceCallback from './useDebounceCallback';
/**
 * 目标缩放延迟处理
 */
export default function useTargetScale(realWidth, realHeight, realScale, speed, updateEasing) {
    const execRef = useRef(false);
    const [{ lead, scale }, updateState] = useSetState({ lead: true, scale: realScale });
    const moveScale = useDebounceCallback(async (current) => {
        updateEasing(true);
        updateState({ lead: false, scale: current });
    }, { wait: speed });
    useIsomorphicLayoutEffect(() => {
        if (!execRef.current) {
            execRef.current = true;
            return;
        }
        updateEasing(false);
        updateState({ lead: true });
        moveScale(realScale);
    }, [realScale]);
    // 运动开始
    if (lead) {
        return [realWidth * scale, realHeight * scale, realScale / scale];
    }
    // 运动结束
    return [realWidth * realScale, realHeight * realScale, 1];
}
