###
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
###

grunt = require('grunt')

exports.darbak = 
  setUp: (done) ->
    # setup here if necessary
    done()

  test1: (test) ->
    test.expect(1)

    actual = grunt.file.read 'tmp/test.js'
    expected = grunt.file.read 'test/expected/test.js'
    test.equal actual, expected, 'test.coffee.md did not properly compiled to javascript with its source and documentation.'

    test.done()

