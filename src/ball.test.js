import { neu } from "./ball";

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
});
