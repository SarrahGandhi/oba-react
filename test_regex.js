const escapedHighlight = "ground";
const regex = new RegExp(`(\\b\\w*${escapedHighlight}\\w*\\b)`, "gi");
const text = "Linear Bearings are designed";
const parts = text.split(regex);
console.log("Parts:", parts);
parts.forEach(part => {
  const isMatch = new RegExp(`^\\b\\w*${escapedHighlight}\\w*\\b$`, "i").test(part);
  console.log(`Part: '${part}', isMatch: ${isMatch}`);
});
