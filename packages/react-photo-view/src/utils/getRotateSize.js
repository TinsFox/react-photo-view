/**
 * 获取旋转后的宽高
 */
export default function getRotateSize(rotate, width, height) {
    const isVertical = rotate % 180 !== 0;
    // 若图片不是水平则调换属性
    if (isVertical) {
        return [height, width, isVertical];
    }
    return [width, height, isVertical];
}
