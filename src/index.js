/**
 * @function isMangled - attempts to determine whether the context it's being executed in had been minified, e.g.: with UglifyJS
 * @return {boolean} - true if document is mangled, false otherwise.
 * @example
 * // returns false if unchanged
 * isMangled()
 * @example
 * // when code gets compressed, function parameters usually get shortened, e.g.: to (t) => {}
 * isMangled() // -> true
 */
const isMangled = () => !/param/.test((param) => {})

export default isMangled

export { isMangled }