import { neu, dot, add, sub, abs, mul } from "./vector";

describe("vector", () => {
  it("builds a vector", () => {
    expect(neu(1, 2)).toEqual({ a: 1, bi: 2 });
  });

  it("calculates the dot product", () => {
    let x = neu(1, 2);
    let y = neu(2, 1);
    expect(dot(x, y)).toEqual(4);
  });

  it("adds vectors", () => {
    let x = neu(1, 2);
    let y = neu(2, 1);
    expect(add(x, y)).toEqual({ a: 3, bi: 3 });
  });

  it("subtracts vectors", () => {
    let x = neu(1, 2);
    let y = neu(2, 1);
    expect(sub(x, y)).toEqual({ a: -1, bi: 1 });
  });

  it("calculates the absolute value", () => {
    let x = neu(3, 4);
    expect(abs(x)).toEqual(5);
  });

  it("multiplies", () => {
    let x = neu(3, 4);
    expect(mul(x, 2)).toEqual({ a: 6, bi: 8 });
  });
});
