import { neu } from "./pocket";

describe("pocket", () => {
  it("has a default radius and the given position", () => {
    let p = neu(1, 3);
    expect(p.radius).toEqual(0.0485);
    expect(p.position).toEqual({ a: 1, bi: 3 });
  });
});
