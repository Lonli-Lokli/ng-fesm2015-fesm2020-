var replace = require("replace-in-file");

console.log(
  replace.sync({
    from: '   constructor(defaultState) {',
    to: `type = 'esm2015'; constructor(defaultState) {`,
    files: [
      "./node_modules/@ngrx/component-store/esm2020/src/component-store.mjs",
    ],
    countMatches: true,
  })
);

console.log(
  replace.sync({
    from: '   constructor(defaultState) {',
    to: `type = 'FESM2015'; constructor(defaultState) {`,
    files: [
      "./node_modules/@ngrx/component-store/fesm2015/ngrx-component-store.mjs",
    ],
    countMatches: true,
  })
);
console.log(
  replace.sync({
    from: '   constructor(defaultState) {',
    to: `type = 'FESM2020'; constructor(defaultState) {`,
    files: [
      "./node_modules/@ngrx/component-store/fesm2020/ngrx-component-store.mjs",
    ],
    countMatches: true,
  })
);
