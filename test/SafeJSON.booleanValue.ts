import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.booleanValue()", () => {
  it("should return false from string", () => {
    const sj = new Any("hello, world");
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from String", () => {
    const sj = new Any(String("hello, world"));
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return true from parsable string", () => {
    const sj = new Any("true");
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return false from parsable String", () => {
    const sj = new Any(String("false"));
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return true from number", () => {
    const sj = new Any(123.45);
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("shoule return true from Number", () => {
    const sj = new Any(Number(123.45));
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return false from number", () => {
    const sj = new Any(0);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("shoule return false from Number", () => {
    const sj = new Any(Number(0));
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return true from boolean", () => {
    const sj = new Any(true);
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return true from Boolean", () => {
    const sj = new Any(Boolean(true));
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return false from dictionary", () => {
    const sj = new Any({ hello: "world" });
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from array", () => {
    const sj = new Any(["hello", "world"]);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from null", () => {
    const sj = new Any(null);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from undefined", () => {
    const sj = new Any(undefined);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new Any(func);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
});
