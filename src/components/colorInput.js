import React from "react";
import { SketchPicker } from "react-color";

const ColorInput = ({
  setColorTrue,
  index,
  item,
  colorTrue,
  handleChangeColor,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        border: "1px solid gray",
        borderRadius: 5,
        padding: 5,
      }}
    >
      <span
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: item.color,
          marginRight: 13,
        }}
        onClick={() => setColorTrue(index)}
      ></span>
      <span>{item.color}</span>
      <div style={{ position: "absolute", top: 300, zIndex: 9999 }}>
        {colorTrue === index ? (
          <SketchPicker
            color={item.color}
            onChange={(e) => handleChangeColor(e, item)}
            onChangeComplete={(e) => setColorTrue(false)}
            disableAlpha
          />
        ) : null}
      </div>
    </div>
  );
};

export default ColorInput;
