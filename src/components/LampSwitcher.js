import React, {useState} from "react";
import {createUseStyles} from "react-jss";
import {FormControlLabel, Switch} from "@material-ui/core";


const useStyles = createUseStyles({
  switcher: {
    boxSizing: "border-box",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    fontSize: "2rem"
  }
});

function LampSwitcher(props) {
  const style = useStyles();
  return (
    <div className={style.switcher}>
      <FormControlLabel
        value="top"
        control={<Switch color="primary" onChange={()=>props.turnOnOff()}/>}
        label="Top"
        labelPlacement="top"
      />{" "}
    </div>
  );
}

export default LampSwitcher;
