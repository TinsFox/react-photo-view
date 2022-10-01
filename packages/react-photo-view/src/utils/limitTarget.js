import { maxScale, minScale } from '../variables';
export const limitNumber = (value, min, max) => {
    return Math.max(Math.min(value, max), min);
};
/**
 * 限制最大/最小缩放
 */
export const limitScale = (scale, max = 0, buffer = 0) => {
    return limitNumber(scale, minScale * (1 - buffer), Math.max(maxScale, max) * (1 + buffer));
};
