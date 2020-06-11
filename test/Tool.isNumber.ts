import { Tool } from "../lib/Tool";
import assert from "assert";

describe("Tool.isNumber", () => {
  it("should return false from \"hello\"", () => {
    assert.deepStrictEqual(Tool.isNumber("hello"), false);
  });
  it("should return false from String(\"hello\")", () => {
    assert.deepStrictEqual(Tool.isNumber(String("hello")), false);
  });
  it("should return true from 1", () => {
    assert.deepStrictEqual(Tool.isNumber(1), true);
  });
  it("should return true from Number(1)", () => {
    assert.deepStrictEqual(Tool.isNumber(Number(1)), true);
  });
  it("should return false from true", () => {
    assert.deepStrictEqual(Tool.isNumber(true), false);
  });
  it("should return false from Boolean(true)", () => {
    assert.deepStrictEqual(Tool.isNumber(Boolean(true)), false);
  });
  it("should return false from null", () => {
    assert.deepStrictEqual(Tool.isNumber(null), false);
  });
});
