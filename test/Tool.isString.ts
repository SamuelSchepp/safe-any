import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool.isString", () => {
  it("should return true from \"hello\"", () => {
    assert.deepStrictEqual(Tool.isString("hello"), true);
  });
  it("should return true from String(\"hello\")", () => {
    assert.deepStrictEqual(Tool.isString(String("hello")), true);
  });
  it("should return false from 1", () => {
    assert.deepStrictEqual(Tool.isString(1), false);
  });
  it("should return false from Number(1)", () => {
    assert.deepStrictEqual(Tool.isString(Number(1)), false);
  });
  it("should return false from true", () => {
    assert.deepStrictEqual(Tool.isString(true), false);
  });
  it("should return false from Boolean(true)", () => {
    assert.deepStrictEqual(Tool.isNumber(Boolean(true)), false);
  });
  it("should return false from null", () => {
    assert.deepStrictEqual(Tool.isString(null), false);
  });
});
