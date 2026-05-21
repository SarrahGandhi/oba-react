import Fuse from 'fuse.js';

const data = [
  { title: "Linear Bearings", content: "Stuff" }
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.0,
  ignoreLocation: true,
  useExtendedSearch: true
});

console.log("bear:", fuse.search("bear").map(r => r.item.title));
console.log("'bear:", fuse.search("'bear").map(r => r.item.title));
