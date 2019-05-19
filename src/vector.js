/**
 * A vector (math) implementation. This was the purpose of the original
 * <a href="https://github.com/olle/CueSticky">CueSticky</a> implementation -
 * to explore the use of complex numbers as a representation for vectors in
 * order to express position, direction, movement and intersection detections.
 * 
 * @module vector
 */

/**
 * A vector represented as a complex number in a simple JS object structure:
 * 
 * @example
 *  
 *  { a: 3, bi: 4 }
 * 
 * @typedef {Object} Vector
 * @property {number} a - the real part
 * @property {number} bi - the imaginary part
 */

/**
 * Creates a new vector object, as pure data.
 * 
 * @example
 * 
 *  const v = vector.neu(3, 4); // --> { a: 3, bi: 4 }
 * 
 * @param {number} a real part
 * @param {number} bi imaginary part
 * @returns {Vector} a new vector object
 */
export function neu(a, bi) {
  return { a: a, bi: bi };
}

/**
 * Calculates the dot-product of the two given vectors.
 * 
 * @example
 * 
 *  const v1 = vector.neu(-6, 8);
 *  const v2 = vector.neu(5, 12);
 *  vector.dot(v1, v2); // --> 66
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
 * @example
 * 
 *  const v1 = vector.neu(-6, 8);
 *  const v2 = vector.neu(5, 12);
 *  vector.add(v1, v2); // --> { a: -1, bi: 20 }
 * 
 * @param {Vector} v1 
 * @param {Vector} v2 
 * @returns {Vector} a new vector object
 */
export function add(v1, v2) {
  return neu(v1.a + v2.a, v1.bi + v2.bi);
}

/**
 * Subtracts the two given vectors.
 * 
 * @example
 * 
 *  const v1 = vector.neu(-6, 8);
 *  const v2 = vector.neu(5, 12);
 *  vector.sub(v1, v2); // --> { a: -11, bi: -4 }
 * 
 * @param {Vector} v1 
 * @param {Vector} v2 
 * @returns {Vector} a new vector object
 */
export function sub(v1, v2) {
  return neu(v1.a - v2.a, v1.bi - v2.bi);
}

/**
 * Calculates the absolute-value of the given vector.
 * 
 * @example
 * 
 *  const v = vector.neu(3, 4);
 *  vector.abs(v); // --> 5
 * 
 * @param {Vector} v
 * @returns {number} the absolute value
 */
export function abs(v) {
  return Math.sqrt(v.a * v.a + v.bi * v.bi);
}

/**
 * Multiplies the given vector with the provided real number.
 * 
 * @example
 * 
 *  const v = vector.neu(3, 4);
 *  vector.mul(v, 2); // --> { a: 6, bi: 8 }
 * 
 * @param {Vector} v
 * @param {number} u 
 * @returns {Vector} a new vector object
 */
export function mul(v, u) {
  return neu(v.a * u, v.bi * u);
}
