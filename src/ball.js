/**
 * A pool ball implementation, in 2D.
 *
 * @module ball
 */

import * as vec from "./vector";
import { formatResultsErrors } from "jest-message-util";

/**
 * A ball data object implementation using vectors to support position,
 * movement, velocity and intersection calculations.
 *
 * @example
 *
 *  {
 *     radius: 0.029,
 *     mass: 0.000841,
 *     position: { a: 3, bi: 4 },
 *     velocity: { a: 0, bi: 0 }
 *  }
 *
 * @typedef {Object} Ball
 * @property {number} radius - the ball radius
 * @property {number} mass - the ball mass
 * @property {Vector} position - the ball position, on the plane
 * @property {Vector} velocity - the current direction and speed
 */

/**
 * A typical pool ball radius.
 */
const BALL_RADIUS = 0.029;

/**
 * Creates a new pool ball data structure. The newly created ball is completely
 * static, without any direction or velocity, located at the `{ a: 0, bi: 0}`
 * point on the plane.
 *
 * @param {object} args - optional constructor arguments
 * @returns {Ball} a new ball object instance
 */
export function neu(args) {
  return {
    radius: BALL_RADIUS,
    mass: BALL_RADIUS * BALL_RADIUS,
    position: (args && args.position) || vec.neu(0, 0),
    velocity: vec.neu(0, 0)
  };
}

/**
 * Moves the given ball along its current direction and velocity, with a
 * distance given by a `delta` factor, leaving the ball with a velocity,
 * reduced by the `alpha` resistance.
 *
 * @param {Ball} ball - to move
 * @param {number} delta - distance factor
 * @param {number} alpha - resistance coefficient
 * @returns {Ball} a new ball object instance
 */
export function move(ball, delta, alpha) {
  let dt = vec.mul(ball.velocity, delta);
  let pos = vec.add(ball.position, dt);
  let vel = vec.mul(ball.velocity, alpha);
  return { ...ball, position: pos, velocity: vel };
}

/**
 * Determines if the two balls are intersecting or not.
 *
 * @param {Ball} b1 one ball
 * @param {Ball} b2 the other ball
 * @returns {boolean} `true` if the balls are intersecting, `false` otherwise.
 */
export function intersects(b1, b2) {
  return vec.abs(vec.sub(b1.position, b2.position)) < b1.radius + b2.radius;
}

/**
 * Determines if the two given balls have collided or not, and returns the
 * balls with updated velocities, according the the collision.
 *
 * @param {Ball} b1 one ball
 * @param {Ball} b2 the other ball
 * @returns {array} containing two new balls, with updated velocity vectors
 */
export function collided(b1, b2) {
  var posDiff = vec.sub(b2.position, b1.position);
  var velDiff = vec.sub(b2.velocity, b1.velocity);
  var dp1 = vec.dot(velDiff, posDiff);
  if (dp1 < 0 && intersects(b1, b2)) {
    var force = (2 * b2.mass) / (b1.mass + b2.mass);
    var dp2 = vec.dot(velDiff, posDiff) / vec.dot(posDiff, posDiff);
    var q = vec.mul(posDiff, dp2);
    var b1v = vec.add(b1.velocity, vec.mul(q, force));
    var b2v = vec.sub(b2.velocity, vec.mul(q, force));
    return [{ ...b1, velocity: b1v }, { ...b2, velocity: b2v }];
  }
  return [b1, b2];
}

export function wall(b, x, y, dim) {
  var vv = b.velocity.bi;
  var hv = b.velocity.a;
  if (
    (b.position.bi - b.radius < dim && vv < 0) ||
    (b.position.bi + b.radius > y - dim && vv > 0)
  ) {
    return { ...b, velocity: { ...b.velocity, bi: -vv } };
  } else if (
    (b.position.a - b.radius < dim && hv < 0) ||
    (b.position.a + b.radius > x - dim && hv > 0)
  ) {
    return { ...b, velocity: { ...b.velocity, a: --hv } };
  }
}

/**
 * Determines if the given ball has fallen into the provided pocket.
 *
 * @param {Ball} ball
 * @param {Pocket} pocket
 * @returns {boolean} `true` if the ball is in the pocket, `false` otherwise.
 */
export function pocket(b, p) {
  return vec.abs(vec.sub(b.position, p.position)) < p.radius;
}
