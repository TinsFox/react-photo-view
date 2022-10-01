import React from 'react';
import ArrowRightLine from './Icon/arrow-right-line';
import ArrowLeftLine from './Icon/arrow-left-line';
import Close from './Icon/close';
export default function DefaultToolBar({ onClose }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(ArrowLeftLine, { className: "PhotoView-Slider__toolbarIcon" }),
        React.createElement(ArrowRightLine, { className: "PhotoView-Slider__toolbarIcon" }),
        React.createElement(Close, { className: "PhotoView-Slider__toolbarIcon", onClick: onClose })));
}
