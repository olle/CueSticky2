import { neu, dot, add, sub, abs } from "./vector";

describe("vector", () => {
  it("builds a vector", () => {
    expect(neu(1, 2)).toEqual({ x: 1, y: 2 });
  });

  it("calculates the dot product", () => {
    let a = neu(1, 2);
    let b = neu(2, 1);
    expect(dot(a, b)).toEqual(4);
  });

  it("adds vectors", () => {
    let a = neu(1, 2);
    let b = neu(2, 1);
    expect(add(a, b)).toEqual({ x: 3, y: 3 });
  });

  it("subtracts vectors", () => {
    let a = neu(1, 2);
    let b = neu(2, 1);
    expect(sub(a, b)).toEqual({ x: -1, y: 1 });
  });

  it("calculates the absolute value", () => {
    let a = neu(3,4);
    expect(abs(a)).toEqual(5);
  });
});
