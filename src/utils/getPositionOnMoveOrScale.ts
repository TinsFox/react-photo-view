/**
 * 获取移动或缩放之后的中心点
 */
export default function getPositionOnMoveOrScale({
  x,
  y,
  clientX,
  clientY,
  fromScale,
  toScale,
}: {
  x: number;
  y: number;
  clientX: number;
  clientY: number;
  fromScale: number;
  toScale: number;
}): {
  x: number;
  y: number;
  scale: number;
} {
  const { innerWidth, innerHeight } = window;
  const centerClientX = innerWidth / 2;
  const centerClientY = innerHeight / 2;
  // 坐标偏移
  const lastPositionX = centerClientX + x;
  const lastPositionY = centerClientY + y;

  // 放大偏移量
  const offsetScale = toScale / fromScale;
  // 偏移位置
  const originX =
    clientX - (clientX - lastPositionX) * offsetScale - centerClientX;
  const originY =
    clientY - (clientY - lastPositionY) * offsetScale - centerClientY;
  return {
    x: originX,
    y: originY,
    scale: toScale,
  };
}
