import { neu, dot, add, sub, abs, mul } from "./vector";

describe("vector", () => {

  it("builds a vector", () => {
    expect(neu(1, 2)).toEqual({ a: 1, bi: 2 });
  });

  it("calculates the dot product", () => {
    let v1 = neu(-6, 8);
    let v2 = neu(5, 12);
    expect(dot(v1, v2)).toEqual(66);
  });

  it("adds vectors", () => {
    let v1 = neu(-6, 8);
    let v2 = neu(5, 12);
    expect(add(v1, v2)).toEqual({ a: -1, bi: 20 });
  });

  it("subtracts vectors", () => {
    let v1 = neu(-6, 8);
    let v2 = neu(5, 12);
    expect(sub(v1, v2)).toEqual({ a: -11, bi: -4 });
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
