import { neu, move, collide } from "./ball";

describe("ball", () => {
  it("has a default radius", () => {
    let b = neu();
    expect(b.radius).toEqual(0.029);
  });

  it("has a mass that is radius squared", () => {
    let b = neu();
    expect(b.mass).toEqual(b.radius * b.radius);
  });

  it("has a default position vector", () => {
    let b = neu();
    expect(b.position).toEqual({ a: 0, bi: 0 });
  });

  it("has a default velocity vector", () => {
    let b = neu();
    expect(b.velocity).toEqual({ a: 0, bi: 0 });
  });

  it("does not move a ball without velocity", () => {
    var b = neu();
    expect(b.position).toEqual({ a: 0, bi: 0 });
    expect(b.velocity).toEqual({ a: 0, bi: 0 });
    b = move(b, 2, .5);
    expect(b.position).toEqual({ a: 0, bi: 0 });
    expect(b.velocity).toEqual({ a: 0, bi: 0 });
  });

  it("moves a ball with velocity", () => {
    var b = neu();
    b.velocity = { a: 1, bi: 1 };
    expect(b.position).toEqual({ a: 0, bi: 0 });
    expect(b.velocity).toEqual({ a: 1, bi: 1 });
    b = move(b, 1, 0.2);
    expect(b.position).toEqual({ a: 1, bi: 1 });
    expect(b.velocity).toEqual({ a: 0.2, bi: 0.2 });
  });

  it("does no collision for balls moving away from each other", () => {
    var a = neu();
    a.position = { a: -1, bi: 0 };
    a.velocity = { a: -1, bi: 0 };
    var b = neu();
    b.position = { a: 1, bi: 0 };
    b.velocity = { a: 1, bi: 0 };
    a = move(a, 1, 1);
    b = move(b, 1, 1);
    [a, b] = collide(a, b);
    expect(a.velocity).toEqual({ a: -1, bi: 0 });
    expect(a.position).toEqual({ a: -2, bi: 0 });
    expect(b.velocity).toEqual({ a: 1, bi: 0 });
    expect(b.position).toEqual({ a: 2, bi: 0 });
  });

  it("corrects velocity/position for balls colliding", () => {
    var a = neu();
    a.position = { a: -1, bi: 0 };
    a.velocity = { a: 1, bi: 0 };
    var b = neu();
    b.position = { a: 0, bi: 0 };
    b.velocity = { a: 0, bi: 0 };
    a = move(a, 2, .5);
    b = move(b, 1, .5);
    [a, b] = collide(a, b);
    expect(a.velocity).toEqual({ a: 0.5, bi: 0 });
    expect(a.position).toEqual({ a: 1, bi: 0 });
    expect(b.velocity).toEqual({ a: 0, bi: 0 });
    expect(b.position).toEqual({ a: 0, bi: 0 });
  });
});
