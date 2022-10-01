import React from 'react';
import { createPortal } from 'react-dom';
import './SlidePortal.less';
function SlidePortal({ container = document.body, ...rest }) {
    return createPortal(React.createElement("div", { ...rest }), container);
}
export default SlidePortal;
