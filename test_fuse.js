import Fuse from 'fuse.js';

const data = [
  { title: "Linear Guideways", content: "Linear guideways are precision motion systems..." }
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.0,
  ignoreLocation: true
});

console.log("fuse search 'ways':", fuse.search("ways").length);
console.log("fuse search 'motion':", fuse.search("motion").length);
