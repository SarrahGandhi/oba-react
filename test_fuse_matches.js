import Fuse from 'fuse.js';

const data = [
  { title: "Linear Bearings", content: "Stuff" }
];

const fuse = new Fuse(data, {
  keys: ["title", "content"],
  threshold: 0.3,
  ignoreLocation: true,
  useExtendedSearch: true,
  includeMatches: true
});

const results = fuse.search("linearabc");
console.log(JSON.stringify(results, null, 2));
