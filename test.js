var tape = require('tape')
var what = require('./')

tape('adds line', function (t) {
  t.plan(2)

  var expected = [
    __filename + ':16 - hello',
    __filename + ':17 - world'
  ]

  var w = what.use(function (msg) {
    t.same(msg, expected.shift(), 'prints line')
  })

  w('hello')
  w('world')
})
