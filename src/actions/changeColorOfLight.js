export const changeColorOfLight = ({id, color}) => {
  return {
    type: "CHANGE_COLOR",
    id: id,
    color: color
  };
};
