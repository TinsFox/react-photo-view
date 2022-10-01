import React, { useMemo, useRef } from 'react';
import useMethods from './hooks/useMethods';
import useSetState from './hooks/useSetState';
import PhotoContext from './photo-context';
import PhotoSlider from './PhotoSlider';
const initialState = {
    images: [],
    visible: false,
    index: 0,
};
export default function PhotoProvider({ children, onIndexChange, onVisibleChange, ...restProps }) {
    const [state, updateState] = useSetState(initialState);
    const uniqueIdRef = useRef(0);
    const { images, visible, index } = state;
    const methods = useMethods({
        nextId() {
            return (uniqueIdRef.current += 1);
        },
        update(imageItem) {
            const currentIndex = images.findIndex((n) => n.key === imageItem.key);
            if (currentIndex > -1) {
                const nextImages = images.slice();
                nextImages.splice(currentIndex, 1, imageItem);
                updateState({
                    images: nextImages,
                });
                return;
            }
            updateState((prev) => ({
                images: prev.images.concat(imageItem),
            }));
        },
        remove(key) {
            updateState((prev) => {
                const nextImages = prev.images.filter((item) => item.key !== key);
                const nextEndIndex = nextImages.length - 1;
                return {
                    images: nextImages,
                    index: Math.min(nextEndIndex, index),
                };
            });
        },
        show(key) {
            const currentIndex = images.findIndex((item) => item.key === key);
            updateState({
                visible: true,
                index: currentIndex,
            });
            if (onVisibleChange) {
                onVisibleChange(true, currentIndex, state);
            }
        },
    });
    const fn = useMethods({
        close() {
            updateState({
                visible: false,
            });
            if (onVisibleChange) {
                onVisibleChange(false, index, state);
            }
        },
        changeIndex(nextIndex) {
            updateState({
                index: nextIndex,
            });
            if (onIndexChange) {
                onIndexChange(nextIndex, state);
            }
        },
    });
    const value = useMemo(() => ({ ...state, ...methods }), [state, methods]);
    return (React.createElement(PhotoContext.Provider, { value: value },
        children,
        React.createElement(PhotoSlider, { images: images, visible: visible, index: index, onIndexChange: fn.changeIndex, onClose: fn.close, ...restProps })));
}
