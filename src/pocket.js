/**
 * A pool table pocket.
 *
 * @module pocket
 */
import * as vec from "./vector";

/**
 * A pool table pocket data object implementation, providing a simple
 * representation.
 *
 * @example
 *
 *  {
 *     position: { a: 3, bi: 4 },
 *     radius: 0.0485,
 *  }
 *
 * @typedef {Object} Pocket
 * @property {number} radius - the pocket radius
 * @property {Vector} position - the pocket position, on the plane (table)
 */

/**
 * A typical pool table pocket radius.
 */
const POCKET_RADIUS = 0.0485;

/**
 * Creates a new pocket data instance.
 *
 * @param {number} x coordinate
 * @param {number} y coordinate
 * @returns {Pocket} a new pocket object instance
 */
export function neu(x, y) {
  return {
    position: vec.neu(x, y),
    radius: POCKET_RADIUS
  };
}
