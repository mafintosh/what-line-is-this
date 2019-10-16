var tape = require('tape')
var what = require('./')

tape('adds line', function (t) {
  t.plan(2)

  var expected = [
    __filename + ':17 - hello',
    __filename + ':18 - world'
  ]

  var w = what.use(function (...msg) {
    const m = [ ...msg ].join(' ')
    t.same(m, expected.shift(), 'prints line')
  })

  w('hello')
  w('world')
})
