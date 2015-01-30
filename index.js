var stackback = require('stackback')

var create = function (pos, log) {
  if (!log) log = console.log
  var what = function (msg) {
    var e = new Error('whatevs')
    var stacks = stackback(e)
    var s = stacks[Math.min(stacks.length - 1, 1 + pos)]
    if (s) msg = s.getFileName() + ':' + s.getLineNumber() + ' - ' + (msg || '')
    log.apply(null, arguments)
  }

  what.use = function (log) {
    return create(pos, log)
  }

  what.stack = function (pos) {
    return create(pos)
  }

  return what
}

module.exports = create(0)
