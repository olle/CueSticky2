/**
 * A pool table.
 *
 * @module table
 */
import * as pocket from "./pocket";

/**
 * A pool table data object implementation, providing a simple representation.
 *
 * @example
 *
 *  {
 *     pockets: []
 *  }
 *
 * @typedef {Object} Table
 * @property {array} pockets - the table pockets
 */

/**
 * Typical pool table wall dimension (width/height).
 */
const WALL_WIDTH_N_HEIGHT = 0.05;

/**
 * Creates a new pool table data object instance.
 *
 * @returns {Table} a new pool table object instance, with 6 pockets
 */
export function neu() {
  let dim = WALL_WIDTH_N_HEIGHT;
  let pad = WALL_WIDTH_N_HEIGHT / 3;
  var ps = [
    [0 + dim + pad, 0 + dim + pad],
    [0 + dim + pad, 1 - dim - pad],
    [1, 0 + dim],
    [1, 1 - dim],
    [2 - dim - pad, 0 + dim + pad],
    [2 - dim - pad, 1 - dim - pad]
  ].map(v => {
    return pocket.neu(v[0], v[1]);
  });
  return { pockets: ps };
}
