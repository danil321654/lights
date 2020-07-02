import React, {useState} from "react";

function Lamp(props) {
  const [color, changeColor] = useState(props.color);
  console.log(props);
  return (
    <div className={"style.lamp"}>
      <div className={"style.coloredPart"}>color</div>
    </div>
  );
}

export default Lamp;
