# modemode

Finds the mode of an array.

Defaults to greatest number in event of ties. Optional second parameter, if set to true, will set the function to return array responses, including, if appropriate, an array of the ties.

## Install

```
$ npm i modemode
```

## Usage

```js
const mode = require("modemode");

const array = [1,2,2,3];
mode(array);
//=> 2

mode(array, true);
//=> [2]

const secondArray = [1,1,2,2,3];
mode(secondArray);
//=> 2

mode(secondArray, true);
//=> [1, 2]
