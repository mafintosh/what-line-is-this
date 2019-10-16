var stackback = require('stackback')
var path = require('path')

var create = function (pos, log, abs) {
  var what = function (...msg) {
    var e = new Error('whatevs')
    var stacks = stackback(e)
    var s = stacks[Math.min(stacks.length - 1, 1 + pos)]
    var file = abs ? s.getFileName() : path.relative(process.cwd(), s.getFileName())
    if (s) log(file + ':' + s.getLineNumber() + ' -', ...msg)
    else log(...msg)
  }

  what.relative = function () {
    return create(pos, log, false)
  }

  what.use = function (log) {
    return create(pos, log, abs)
  }

  what.stack = function (pos) {
    return create(pos, log, abs)
  }

  return what
}

module.exports = create(0, console.log, true)
