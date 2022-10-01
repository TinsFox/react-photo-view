import { useState, useEffect, useRef } from 'react';
import useMethods from './useMethods';
import { maxWaitAnimationTime } from '../variables';
const initialRect = {
    T: 0,
    L: 0,
    W: 0,
    H: 0,
    // 图像填充方式
    FIT: undefined,
};
export default function useAnimationOrigin(visible, originRef, loaded, speed, updateEasing) {
    const [originRect, updateOriginRect] = useState(initialRect);
    // 动画状态
    const [easingMode, updateEasingMode] = useState(0);
    const initialTime = useRef();
    const fn = useMethods({
        OK: () => visible && updateEasingMode(4),
    });
    useEffect(() => {
        // 记录初始打开的时间
        if (!initialTime.current) {
            initialTime.current = Date.now();
        }
        if (!loaded) {
            return;
        }
        handleUpdateOrigin(originRef, updateOriginRect);
        // 打开动画处理
        if (visible) {
            // 小于最大允许动画时间，则执行缩放动画
            if (Date.now() - initialTime.current < maxWaitAnimationTime) {
                updateEasingMode(1);
                // 延时执行动画，保持 transition 生效
                requestAnimationFrame(() => {
                    updateEasingMode(2);
                    requestAnimationFrame(() => handleToShape(3));
                });
                setTimeout(fn.OK, speed);
                return;
            }
            // 超出则不执行
            updateEasingMode(4);
            return;
        }
        // 关闭动画处理
        handleToShape(5);
    }, [visible, loaded]);
    function handleToShape(currentShape) {
        updateEasing(false);
        updateEasingMode(currentShape);
    }
    return [easingMode, originRect];
}
/**
 * 更新缩略图位置信息
 */
function handleUpdateOrigin(originRef, updateOriginRect) {
    const element = originRef && originRef.current;
    if (element && element.nodeType === 1) {
        // 获取触发时节点位置
        const { top, left, width, height } = element.getBoundingClientRect();
        const isImage = element.tagName === 'IMG';
        updateOriginRect({
            T: top,
            L: left,
            W: width,
            H: height,
            FIT: isImage ? getComputedStyle(element).objectFit : undefined,
        });
    }
}
