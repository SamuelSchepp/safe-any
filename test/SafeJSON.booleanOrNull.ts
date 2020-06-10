import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny.booleanOrNull()", () => {
  it("should return null from string", () => {
    const sj = new SafeAny("hello, world");
    assert.deepStrictEqual(sj.booleanOrNull(), null);
  });
  it("should return null from String", () => {
    const sj = new SafeAny(String("hello, world"));
    assert.deepStrictEqual(sj.booleanOrNull(), null);
  });
  it("should return true from parsable string", () => {
    const sj = new SafeAny("true");
    assert.deepStrictEqual(sj.booleanOrNull(), true);
  });
  it("should return false from parsable String", () => {
    const sj = new SafeAny(String("false"));
    assert.deepStrictEqual(sj.booleanOrNull(), false);
  });
  it("should return true from number", () => {
    const sj = new SafeAny(123.45);
    assert.deepStrictEqual(sj.booleanOrNull(), true);
  });
  it("shoule return true from Number", () => {
    const sj = new SafeAny(Number(123.45));
    assert.deepStrictEqual(sj.booleanOrNull(), true);
  });
  it("should return false from number", () => {
    const sj = new SafeAny(0);
    assert.deepStrictEqual(sj.booleanOrNull(), false);
  });
  it("shoule return false from Number", () => {
    const sj = new SafeAny(Number(0));
    assert.deepStrictEqual(sj.booleanOrNull(), false);
  });
  it("should return true from boolean", () => {
    const sj = new SafeAny(true);
    assert.deepStrictEqual(sj.booleanOrNull(), true);
  });
  it("should return false from Boolean", () => {
    const sj = new SafeAny(Boolean(false));
    assert.deepStrictEqual(sj.booleanOrNull(), false);
  });
  it("should return null from dictionary", () => {
    const sj = new SafeAny({ hello: "world" });
    assert.deepStrictEqual(sj.booleanOrNull(), null);
  });
  it("should return null from array", () => {
    const sj = new SafeAny(["hello", "world"]);
    assert.deepStrictEqual(sj.booleanOrNull(), null);
  });
  it("should return null from null", () => {
    const sj = new SafeAny(null);
    assert.deepStrictEqual(sj.booleanOrNull(), null);
  });
  it("should return null from undefined", () => {
    const sj = new SafeAny(undefined);
    assert.deepStrictEqual(sj.booleanOrNull(), null);
  });
  it("should return null from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new SafeAny(func);
    assert.deepStrictEqual(sj.booleanOrNull(), null);
  });
});
