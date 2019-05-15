/**
 * A pool table pocket.
 */
import * as vec from "./vector";

const POCKET_RADIUS = 0.0485;

export function neu(x, y) {
  return {
    position: vec.neu(x, y),
    radius: POCKET_RADIUS
  };
}
