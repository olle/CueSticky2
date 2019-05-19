/**
 * A vector (math) implementation. This was the purpose of the original
 * <a href="https://github.com/olle/CueSticky">CueSticky</a> implementation -
 * to explore the use of complex numbers as a representation for vectors in
 * order to express position, direction, movement and intersection detections.
 * 
 * @module vector
 */

/**
 * A vector represented as a complex number.
 * 
 * @typedef {Object} Vector
 * @property {number} a - the real part
 * @property {number} bi - the imaginary part
 */

/**
 * Creates a new vector object, as pure data.
 * 
 * @param {number} a real
 * @param {number} bi imaginary
 * @returns {Vector} a new vector object
 */
export function neu(a, bi) {
  return { a: a, bi: bi };
}

/**
 * Calculates the dot-product of the two given vectors.
 * 
 * @param {Vector} v1
 * @param {Vector} v2
 * @returns {number} the scalar product real number
 */
export function dot(v1, v2) {
  return v1.a * v2.a + v1.bi * v2.bi;
}

/**
 * Performs an addition of the two given vectors.
 * 
 * @param {Vector} v1 
 * @param {Vector} v2 
 */
export function add(v1, v2) {
  return neu(v1.a + v2.a, v1.bi + v2.bi);
}

/**
 * Subtracts the two given vectors.
 * 
 * @param {Vector} v1 
 * @param {Vector} v2 
 */
export function sub(v1, v2) {
  return neu(v1.a - v2.a, v1.bi - v2.bi);
}

/**
 * Calculates the absolute-value of the given vector.
 * 
 * @param {Vector} v1 
 */
export function abs(v1) {
  return Math.sqrt(v1.a * v1.a + v1.bi * v1.bi);
}

/**
 * Multiplies the given vector with the provided real number.
 * 
 * @param {Vector} v
 * @param {number} u 
 */
export function mul(v, u) {
  return neu(v.a * u, v.bi * u);
}
