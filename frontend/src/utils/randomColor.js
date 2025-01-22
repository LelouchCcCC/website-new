const generateLightColor = () => {
  const red = Math.floor(Math.random() * (255 - 128) + 128);
  const green = Math.floor(Math.random() * (255 - 128) + 128);
  const blue = Math.floor(Math.random() * (255 - 128) + 128);
  const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  return color;
};

export default generateLightColor