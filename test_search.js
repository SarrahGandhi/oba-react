import Fuse from 'fuse.js';

const data = [
  { title: "Linear", path: "/1", content: "Linear bearings" },
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.0,
  ignoreLocation: true
});

console.log("linear:", fuse.search("linear").length);
console.log("linear :", fuse.search("linear ").length);
console.log("linear b:", fuse.search("linear b").length);