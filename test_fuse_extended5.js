import Fuse from 'fuse.js';

const data = [
  { title: "Linear Bearings", content: "Stuff" },
  { title: "Linear Only", content: "Stuff" },
  { title: "Bearings Only", content: "Stuff" }
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.0,
  ignoreLocation: true,
  useExtendedSearch: true
});

console.log("linear xxyyzz:", fuse.search("linear xxyyzz").map(r => r.item.title));
console.log("'linear | 'xxyyzz:", fuse.search("'linear | 'xxyyzz").map(r => r.item.title));
