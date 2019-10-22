# modemode

Finds the mode of an array. Defaults to greatest number in event of ties. Optional second parameter, if set to true, returns an array of the ties.

## Install

```
$ npm install modemode
```

## Usage

```js
const mode = require("modemode");

const array = [1,2,2,3];
mode(array);
//=> 2

const secondArray = [1,1,2,2,3];
mode(secondArray);
//=> 2

mode(secondArray, true);
//=> [1, 2]
