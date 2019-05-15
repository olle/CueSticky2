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

});
