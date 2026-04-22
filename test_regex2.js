const highlight = "ground";
const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const regex = new RegExp(`(\\b\\w*${escapedHighlight}\\w*\\b)`, "gi");

const text1 = "Linear Bearings are designed";
const text2 = "Linear Stages";
const text3 = "Linear Guideways";

console.log(text1.split(regex));
console.log(text2.split(regex));
console.log(text3.split(regex));
