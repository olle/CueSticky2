/**
 * A pool ball.
 */
import * as vec from "./vector";

const BALL_RADIUS = 0.029;

export function neu() {
  return {
    radius: BALL_RADIUS,
    mass: BALL_RADIUS * BALL_RADIUS,
    position: vec.neu(0, 0),
    velocity: vec.neu(0, 0)
  };
}