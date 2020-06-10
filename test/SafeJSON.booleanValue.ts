import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny.booleanValue()", () => {
  it("should return false from string", () => {
    const sj = new SafeAny("hello, world");
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from String", () => {
    const sj = new SafeAny(String("hello, world"));
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return true from parsable string", () => {
    const sj = new SafeAny("true");
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return false from parsable String", () => {
    const sj = new SafeAny(String("false"));
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return true from number", () => {
    const sj = new SafeAny(123.45);
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("shoule return true from Number", () => {
    const sj = new SafeAny(Number(123.45));
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return false from number", () => {
    const sj = new SafeAny(0);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("shoule return false from Number", () => {
    const sj = new SafeAny(Number(0));
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return true from boolean", () => {
    const sj = new SafeAny(true);
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return true from Boolean", () => {
    const sj = new SafeAny(Boolean(true));
    assert.deepStrictEqual(sj.booleanValue(), true);
  });
  it("should return false from dictionary", () => {
    const sj = new SafeAny({ hello: "world" });
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from array", () => {
    const sj = new SafeAny(["hello", "world"]);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from null", () => {
    const sj = new SafeAny(null);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from undefined", () => {
    const sj = new SafeAny(undefined);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
  it("should return false from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new SafeAny(func);
    assert.deepStrictEqual(sj.booleanValue(), false);
  });
});
