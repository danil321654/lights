import React from "react";
import {connect} from "react-redux";
import {createUseStyles} from "react-jss";
import {addLight} from "./actions/addLight";
import {removeLight} from "./actions/removeLight";
import {changeColorOfLight} from "./actions/changeColorOfLight";
import {turnOnOff} from "./actions/turnOnOff";
import Lamp from "./components/Lamp";
import LampSwitcher from "./components/LampSwitcher";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row"
  },
  lampsWrapper: {
    width: "90%",
    boxSizing: "border-box",
    padding: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "200px",
    gridAutoFlow: "column"
  }
});

function App(props) {
  const styles = useStyles();
  let lampsComponents = props.lights.map((lamp, idx) => (
    <Lamp
      key={idx}
      {...props.lights[idx]}
      addLight={props.addLight}
      removeLight={props.removeLight}
      changeColorOfLight={props.changeColorOfLight}
      turnedOn={props.turnedOn}
    />
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.lampsWrapper}>{lampsComponents}</div>{" "}
      <LampSwitcher turnOnOff={props.turnOnOff} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    lights: state.lights.lights,
    turnedOn: state.lights.turnedOn,
    timer: state.lights.timer
  };
};

const mapDispatchToProps = {
  addLight: addLight,
  removeLight: removeLight,
  changeColorOfLight: changeColorOfLight,
  turnOnOff: turnOnOff
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
