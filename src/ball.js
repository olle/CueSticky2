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

export function move(ball, delta, alpha) {
  let dt = vec.mul(ball.velocity, delta);
  let pos = vec.add(ball.position, dt);
  let vel = vec.mul(ball.velocity, alpha);
  return { ...ball, position: pos, velocity: vel };
}

export function bounce(b1, b2) {
  var posDiff = vec.sub(b2.position, b1.position);
  var velDiff = vec.sub(b2.velocity, b1.velocity);
  var dp1 = vec.dot(velDiff, posDiff);
  var dist = vec.abs(vec.sub(b1.position, b2.position));
  var bounds = b2.radius + b1.radius;
  if (dp1 < 0 && dist < bounds) {
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

export function pocket(b, p) {
  return vec.abs(vec.sub(b.position, p)) < b.radius;
}
