import Fuse from 'fuse.js';

const data = [
  { title: "Linear Bearings", content: "Stuff" },
  { title: "Other", content: "Things" }
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.0,
  ignoreLocation: true,
  useExtendedSearch: true
});

console.log("bearing linear:", fuse.search("bearing linear").map(r => r.item.title));
console.log("'bearing 'linear:", fuse.search("'bearing 'linear").map(r => r.item.title));
console.log("linear bearing:", fuse.search("linear bearing").map(r => r.item.title));
