const { equal } = require('assert')
const { isMangled } = require('../index')

const { minify } = require('uglify-js')

describe('isMangled', () => {
    it('should return false when code is not minified', () => {
        const test = isMangled()

        equal(test, false)
    })

    it('should return true when code is minified', () => {
        const code = isMangled.toString()
        const mangled = minify(code).code
        const test = ex(mangled)
        equal(test, true)
    })
})

function ex (code) {
    return eval(`(${code})()`)
}