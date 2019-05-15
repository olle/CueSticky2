import { neu } from "./table"

describe("table", () => {
  it("has 6 pockets by default", () => {
    let t = neu();
    expect(t.pockets.length).toEqual(6);
  });
});