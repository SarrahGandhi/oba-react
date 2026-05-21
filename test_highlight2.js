const text = "Linear bearings are designed to provide smooth motion...";
const highlight = "bearing linear";

const terms = highlight.trim().toLowerCase().split(/\s+/);
const regexTerms = highlight.trim().split(/\s+/).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
const regex = new RegExp(`(${regexTerms.join('|')})`, "gi");

const parts = text.split(regex);
console.log("Parts:");
parts.forEach(part => {
  const isMatch = terms.includes(part.toLowerCase());
  console.log(`'${part}': isMatch=${isMatch}`);
});
