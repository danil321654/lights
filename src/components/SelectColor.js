import React from "react";
import {InputLabel, Select} from "@material-ui/core";
import {randomHexColor} from "./../other_funcs/randomHexColor";

function SelectColor(props) {
  let options = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "random"
  ];
  let optionsComponents = options.map((optionColor, idx) => (
    <option key={idx} value={optionColor}>
      {optionColor}
    </option>
  ));
  const changeColor = e => {
    let dispatchingColor = e.target.value;
    if (e.target.value === "random") dispatchingColor = randomHexColor();
    props.changeColorOfLight({id: props.id, color: dispatchingColor});
  };
  return (
    <div>
      <InputLabel htmlFor="color-select">color</InputLabel>
      <Select
        native
        value={options.includes(props.color) ? props.color : "random"}
        onChange={changeColor}
        label="color"
        inputProps={{
          name: "color",
          id: "color-select"
        }}
      >
        {optionsComponents}
      </Select>
    </div>
  );
}

export default SelectColor;
