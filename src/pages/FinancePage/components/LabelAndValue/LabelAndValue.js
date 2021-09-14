import React from "react";
import "./styles.css";
const LabelAndValue = ({ label, value, green, bordered, flex }) => {
  return (
    <div className="financelabelAndValue">
      <label className="financeLAVlabel">{label}</label>
      <span
        className="financeLAVvalue"
        style={{
          color: green ? "#38C985" : "#040A1D",
          borderRight: bordered ? "1px solid grey" : "none",
          flex: flex,
        }}
      >
        {value}
      </span>
    </div>
  );
};

export default LabelAndValue;
