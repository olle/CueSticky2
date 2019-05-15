/**
 * A pool ball.
 */
import * as vec from "./vector";
import { buildFailureTestResult } from "@jest/test-result";

const BALL_RADIUS = 0.029;

export function neu() {
  return {
    radius: BALL_RADIUS,
    mass: BALL_RADIUS * BALL_RADIUS,
    position: vec.neu(0, 0),
    velocity: vec.neu(0, 0)
  };
}

export function move(ball, delta, alpha) {
  let dt = vec.mul(ball.velocity, delta);
  let pos = vec.add(ball.position, dt);
  let vel = vec.mul(ball.velocity, alpha);
  return { ...ball, position: pos, velocity: vel };
}
