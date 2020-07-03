import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.booleanOrDefault()", () => {
  it("should return true from string", () => {
    const sj = new Any("hello, world");
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return true from String", () => {
    const sj = new Any(String("hello, world"));
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return true from parsable string", () => {
    const sj = new Any("true");
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return false from parsable String", () => {
    const sj = new Any(String("false"));
    assert.deepStrictEqual(sj.booleanOrDefault(true), false);
  });
  it("should return true from number", () => {
    const sj = new Any(123.45);
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("shoule return true from Number", () => {
    const sj = new Any(Number(123.45));
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return false from number", () => {
    const sj = new Any(0);
    assert.deepStrictEqual(sj.booleanOrDefault(true), false);
  });
  it("shoule return false from Number", () => {
    const sj = new Any(Number(0));
    assert.deepStrictEqual(sj.booleanOrDefault(true), false);
  });
  it("should return false from boolean", () => {
    const sj = new Any(false);
    assert.deepStrictEqual(sj.booleanOrDefault(true), false);
  });
  it("should return false from Boolean", () => {
    const sj = new Any(Boolean(false));
    assert.deepStrictEqual(sj.booleanOrDefault(true), false);
  });
  it("should return true from dictionary", () => {
    const sj = new Any({ hello: "world" });
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return true from array", () => {
    const sj = new Any(["hello", "world"]);
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return true from null", () => {
    const sj = new Any(null);
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return true from undefined", () => {
    const sj = new Any(undefined);
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
  it("should return true from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new Any(func);
    assert.deepStrictEqual(sj.booleanOrDefault(true), true);
  });
});
