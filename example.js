var what = require('./').relative()

var foo = function () {
  what('line is this?')
}

what('line is this?')
foo()
