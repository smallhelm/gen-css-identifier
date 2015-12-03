# gen-css-identifier
Generate a unique css class or id name.

```js
var gen = require("gen-css-identifier");

//just a simple function that returns a string

gen();// -> g1
gen();// -> g2
...
...
gen();// -> gz2a


//by default they are prefixed with "g"
//you can use the factory to set your own prefix
var factory = require("gen-css-identifier/factory");

var myGen = factory("my-prefix-");

myGen();// -> my-prefix-2zq
myGen();// -> my-prefix-2zr
```

## unique?
Not globally unique, only unique to the current executing process.

## License
MIT
