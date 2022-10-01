import React from 'react';
import Spinner from './components/Spinner';
import useMountedRef from './hooks/useMountedRef';
import './Photo.less';
export default function Photo({ src, loaded, broken, className, onPhotoLoad, loadingElement, brokenElement, ...restProps }) {
    const mountedRef = useMountedRef();
    function handleImageLoaded(e) {
        const { naturalWidth, naturalHeight } = e.target;
        if (mountedRef.current) {
            onPhotoLoad({
                loaded: true,
                naturalWidth,
                naturalHeight,
            });
        }
    }
    function handleImageBroken() {
        if (mountedRef.current) {
            onPhotoLoad({
                broken: true,
            });
        }
    }
    if (src && !broken) {
        return (React.createElement(React.Fragment, null,
            React.createElement("img", { className: `PhotoView__Photo${className ? ` ${className}` : ''}`, src: src, onLoad: handleImageLoaded, onError: handleImageBroken, alt: "", ...restProps }),
            !loaded &&
                (React.createElement("span", { className: "PhotoView__icon" }, loadingElement) || React.createElement(Spinner, { className: "PhotoView__icon" }))));
    }
    if (brokenElement) {
        return (React.createElement("span", { className: "PhotoView__icon" }, typeof brokenElement === 'function' ? brokenElement({ src }) : brokenElement));
    }
    return null;
}
