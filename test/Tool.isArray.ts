import { Tool } from "../lib/Tool";
import assert from "assert";

describe("Tool.isArray", () => {
  it("should return false from \"hello\"", () => {
    assert.deepStrictEqual(Tool.isArray("hello"), false);
  });
  it("should return false from {}", () => {
    assert.deepStrictEqual(Tool.isArray({}), false);
  });
  it("should return true from []", () => {
    assert.deepStrictEqual(Tool.isArray([]), true);
  });
  it("should return false from null", () => {
    assert.deepStrictEqual(Tool.isArray(null), false);
  });
  it("should return false from undefined", () => {
    assert.deepStrictEqual(Tool.isArray(undefined), false);
  });
  it("should return false from custom class", () => {
    class Test { }
    assert.deepStrictEqual(Tool.isArray(new Test()), false);
  });
});
