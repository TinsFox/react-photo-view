/**
 * 获取接触边缘类型
 */
export const getReachType = (initialTouchState, horizontalCloseEdge, verticalCloseEdge, reachPosition) => {
    if ((horizontalCloseEdge && initialTouchState === 1) || reachPosition === 'x') {
        return 'x';
    }
    else if ((verticalCloseEdge && initialTouchState > 1) || reachPosition === 'y') {
        return 'y';
    }
    return undefined;
};
/**
 * 计算接触边缘位置
 * @param position - x/y
 * @param scale
 * @param size - width/height
 * @param innerSize - innerWidth/innerHeight
 * @return [CloseEdgeType, position]
 */
export const computePositionEdge = (position, scale, size, innerSize) => {
    const currentWidth = size * scale;
    // 图片超出的宽度
    const outOffset = (currentWidth - innerSize) / 2;
    let closedEdge = undefined;
    let current = position;
    if (currentWidth <= innerSize) {
        closedEdge = 1;
        current = 0;
    }
    else if (position > 0 && outOffset - position <= 0) {
        closedEdge = 2;
        current = outOffset;
    }
    else if (position < 0 && outOffset + position <= 0) {
        closedEdge = 3;
        current = -outOffset;
    }
    return [closedEdge, current];
};
