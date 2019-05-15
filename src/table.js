/**
 * A pool table.
 */
import * as pocket from "./pocket";

const WALL_WIDTH_N_HEIGHT = 0.05;

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
