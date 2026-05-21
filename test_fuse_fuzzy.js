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
  // useExtendedSearch: true
});

console.log("linear abc:", fuse.search("linear abc").map(r => r.item.title));
console.log("linearabc:", fuse.search("linearabc").map(r => r.item.title));
