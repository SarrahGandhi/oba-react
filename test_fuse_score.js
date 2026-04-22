import Fuse from 'fuse.js';

const data = [
  { title: "Linear Guideways", content: "Some content about ground." },
  { title: "Grounding Bearings", content: "More content." },
  { title: "Ground", content: "Nothing special here." },
];

const fuse = new Fuse(data, {
  keys: [
    { name: "title", weight: 3 },
    { name: "content", weight: 1 },
  ],
  threshold: 0.0,
  ignoreLocation: true,
  includeScore: true,
});

console.log("ground:", fuse.search("ground").map(r => ({ title: r.item.title, score: r.score })));
