# what-line-is-this

Output a message prefixed with the name and line number
of the source file where you outputted the message

```
npm install what-line-is-this
```

## Usage

Assuming the following file is saved as `/Users/maf/index.js`

``` js
var what = require('what-line-is-this')

var foo = function () {
  what('line is this?')
}

what('line is this?')
foo()
```

Running it will produce the following output

```
/Users/maf/index.js:4 - line is this?
/Users/maf/index.js:7 - line is this?
```

If you wanted to output the line of the calling method instead use `what.stack(pos)`
to change the stack frame being used.

```
var what = require('what-line-is-this').stack(1)

var foo = function() {
  what('line is this?')
}

foo()
```

Running the above will print

```
/Users/maf/index.js:7 - line is this?
```

## License

MIT
