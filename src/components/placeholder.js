import React from "react";

export default function Placeholder({
  height = "auto",
  width = "auto",
  showBorder = false,
  children,
  aligitem,
}) {
  return (
    <div
      style={{
        height: height,
        width: width,
        alignItems:aligitem,
        borderInlineStart: showBorder
          ? "1px dashed var(--p-color-bg-success-subdued)"
          : "none",
      }}
    >
      {children}
    </div>
  );
}
