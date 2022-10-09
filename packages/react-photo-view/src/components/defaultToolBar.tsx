import React from "react";
import ArrowRightLine from "./Icon/arrow-right-line";
import ArrowLeftLine from "./Icon/arrow-left-line";
import Close from "./Icon/close";

export default function DefaultToolBar({ onClose }: any) {
  return (
    <>
      <ArrowLeftLine className="PhotoView-Slider__toolbarIcon" />
      <ArrowRightLine className="PhotoView-Slider__toolbarIcon" />
      <Close className="PhotoView-Slider__toolbarIcon" onClick={onClose} />
    </>
  );
}
