export const randomHexColor = () => {
  let colorParts = [];
  for (let i = 0; i < 3; i++) {
    let partOfColor = Math.floor(Math.random() * 256).toString(16);
    colorParts = [
      ...colorParts,
      partOfColor.length === 2 ? partOfColor : `0${partOfColor}`
    ];
  }
  return `#${colorParts[0]}${colorParts[1]}${colorParts[2]}`;
};
