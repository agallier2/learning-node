// npm i packageName is local
// npm -g packageName is global dependency
// nm init -y initializes the package.json
// must create package.json

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)