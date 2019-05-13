import { dotx } from "./vector";

describe("vector", () => {
  it("calculates the dot product", () => {
    let a = { x: 1, y: 2 };
    let b = { x: 2, y: 1 };
    expect(dotx(a, b)).toEqual(4);
  });
});
