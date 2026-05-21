const text = "Linear bearings are designed to provide smooth motion...";
const highlight = "bearing linear";

if (!highlight.trim() || highlight.length < 1) console.log(text);
const terms = highlight.trim().split(/\s+/).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
const regex = new RegExp(`(${terms.join('|')})`, "gi");

const parts = text.split(regex);
console.log(parts);
