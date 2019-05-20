import { neu, move, intersects } from "./ball";

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

  it("has a given position vector", () => {
    let b = neu({ position: { a: 1, bi: 3 } });
    expect(b.position).toEqual({ a: 1, bi: 3 });
  });

  it("has a default velocity vector", () => {
    let b = neu();
    expect(b.velocity).toEqual({ a: 0, bi: 0 });
  });

  it("does not move a ball without velocity", () => {
    let b = neu();
    expect(b.position).toEqual({ a: 0, bi: 0 });
    expect(b.velocity).toEqual({ a: 0, bi: 0 });
    b = move(b, 2, 0.5);
    expect(b.position).toEqual({ a: 0, bi: 0 });
    expect(b.velocity).toEqual({ a: 0, bi: 0 });
  });

  it("moves a ball with velocity", () => {
    let b = neu();
    b.velocity = { a: 1, bi: 1 };
    expect(b.position).toEqual({ a: 0, bi: 0 });
    expect(b.velocity).toEqual({ a: 1, bi: 1 });
    b = move(b, 1, 0.2);
    expect(b.position).toEqual({ a: 1, bi: 1 });
    expect(b.velocity).toEqual({ a: 0.2, bi: 0.2 });
  });

  it("does not intersect balls far apart", () => {
    let b1 = neu({ position: { a: -2, bi: -5 } });
    let b2 = neu({ position: { a: 2, bi: 5 } });
    expect(intersects(b1, b2)).toBe(false);
  });

  it("intersects balls on each other", () => {
    let b1 = neu();
    let b2 = neu();
    expect(intersects(b1, b2)).toBe(true);
  });

  it("intersects balls < 2*radius apart", () => {
    let b1 = neu({ position: { a: 0, bi: 0 } });
    let b2 = neu({ position: { a: b1.radius * 1.9876543210, bi: 0 } });
    expect(intersects(b1, b2)).toBe(true);
  });
});
