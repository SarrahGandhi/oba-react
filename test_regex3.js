import Fuse from 'fuse.js';

const data = [
  { title: "Linear Bearings", content: "Linear bearings are designed to provide smooth and precise motion..." },
  { title: "Mounted Bearings", content: "Mounted bearings are pre-assembled bearing units housed in a support..." },
  { title: "Linear Stages", content: "Linear stages are complete motion systems that provide contr..." },
  { title: "Linear Guideways", content: "Linear guideways are precision motion systems designed to..." }
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.6,
  ignoreLocation: true
});

console.log("ground 0.6:", fuse.search("ground").map(r => r.item.title));
console.log("g 0.6:", fuse.search("g").map(r => r.item.title));
