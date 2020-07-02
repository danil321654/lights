import {randomHexColor} from "./randomHexColor";

describe("random color func", () => {
  it("should return a color in hex format", () => {
    expect(randomHexColor().match(/#(([a-f]|\d){6})/)).toBeTruthy();
  });
});
