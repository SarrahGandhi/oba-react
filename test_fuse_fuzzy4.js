import Fuse from 'fuse.js';

const data = [
  { title: "Linear Bearings", content: "Stuff" },
  { title: "Linear Only", content: "Stuff" },
  { title: "Bearings Only", content: "Stuff" }
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.3,
  ignoreLocation: true,
  useExtendedSearch: true
});

const formatQuery = (q) => {
  const terms = q.trim().split(/\s+/);
  return terms.join(' | ');
};

console.log("Q1:", formatQuery("bearing linear"));
console.log("bearing linear:", fuse.search(formatQuery("bearing linear")).map(r => r.item.title));
console.log("Q2:", formatQuery("linear abc"));
console.log("linear abc:", fuse.search(formatQuery("linear abc")).map(r => r.item.title));
console.log("Q3:", formatQuery("linearabc"));
console.log("linearabc:", fuse.search(formatQuery("linearabc")).map(r => r.item.title));
