import Fuse from 'fuse.js';
import { searchIndex } from './src/searchIndex.js';

const fuse = new Fuse(searchIndex, {
  keys: ["title", "content"],
  threshold: 0.0,
  ignoreLocation: true
});

console.log("Total items:", searchIndex.length);
console.log("g:", fuse.search("g").map(r => r.item.title));
console.log("gr:", fuse.search("gr").map(r => r.item.title));
console.log("gro:", fuse.search("gro").map(r => r.item.title));
console.log("grou:", fuse.search("grou").map(r => r.item.title));
console.log("groun:", fuse.search("groun").map(r => r.item.title));
console.log("ground:", fuse.search("ground").map(r => r.item.title));
