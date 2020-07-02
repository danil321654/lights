import React from "react";
import { connect} from "react-redux";
import {store} from "./store";
import {addLight} from "./actions/addLight";
import {removeLight} from "./actions/removeLight";
import Lamp from "./components/Lamp";

function App(props) {
  return (
    <div className="App">
        <Lamp color="red" />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    lights: state.lights.lights,
    turnedOn: state.lights.turnedOn
  };
};

const mapDispatchToProps = {
  addLight: addLight,
  removeLight: removeLight
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
