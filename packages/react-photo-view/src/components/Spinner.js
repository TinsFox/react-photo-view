import React from 'react';
import './Spinner.less';
function Spinner({ className, ...props }) {
    return (React.createElement("div", { className: `PhotoView__Spinner ${className}`, ...props },
        React.createElement("svg", { viewBox: "0 0 32 32", width: "36", height: "36", fill: "white" },
            React.createElement("path", { opacity: ".25", d: "M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4" }),
            React.createElement("path", { d: "M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z" }))));
}
export default Spinner;
