import { Tool } from "../lib/Tool";
import assert from "assert";

describe("Tool.mapValues", () => {
  it("should return a dictionary with mapped values", () => {
    const input = {
      a: 0,
      b: 1,
      c: 2,
    };

    const result = Tool.mapValue(input, (value: number) => {
      return value + 65;
    });

    assert.deepStrictEqual(result, {
      a: 65,
      b: 66,
      c: 67,
    });
  });
});
