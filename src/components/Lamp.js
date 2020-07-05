import React, {useState} from "react";
import {createUseStyles} from "react-jss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";
import {faLightbulb as farLightbulb} from "@fortawesome/free-regular-svg-icons";
import SelectColor from "./SelectColor";

fontawesome.library.add(faLightbulb);
const useStyles = createUseStyles({
  lightElement: {
    boxSizing: "border-box",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    fontSize: "2rem"
  }
});

function Lamp(props) {
  console.log(props);
  const style = useStyles();
  return (
    <div className={style.lightElement}>
      <div className={"style.coloredPart"}>
        <FontAwesomeIcon
          icon={props.turnedOn ? faLightbulb : farLightbulb}
          color={props.turnedOn ? props.color : "black"}
        />
      </div>
      <SelectColor {...props} />
    </div>
  );
}

export default Lamp;
