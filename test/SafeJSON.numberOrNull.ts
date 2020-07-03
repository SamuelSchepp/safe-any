import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.numberOrNull()", () => {
  it("should return null from string", () => {
    const sj = new Any("hello, world");
    assert.deepStrictEqual(sj.numberOrNull(), null);
  });
  it("should return null from String", () => {
    const sj = new Any(String("hello, world"));
    assert.deepStrictEqual(sj.numberOrNull(), null);
  });
  it("should return 311.34 from parsable string", () => {
    const sj = new Any("311.34");
    assert.deepStrictEqual(sj.numberOrNull(), 311.34);
  });
  it("should return 23.4 from parsable String", () => {
    const sj = new Any(String("23.4"));
    assert.deepStrictEqual(sj.numberOrNull(), 23.4);
  });
  it("should return 123.45 from number", () => {
    const sj = new Any(123.45);
    assert.deepStrictEqual(sj.numberOrNull(), 123.45);
  });
  it("shoule return 123.45 from Number", () => {
    const sj = new Any(Number(123.45));
    assert.deepStrictEqual(sj.numberOrNull(), 123.45);
  });
  it("should return 1 from boolean", () => {
    const sj = new Any(true);
    assert.deepStrictEqual(sj.numberOrNull(), 1);
  });
  it("should return 0 from Boolean", () => {
    const sj = new Any(Boolean(false));
    assert.deepStrictEqual(sj.numberOrNull(), 0);
  });
  it("should return null from dictionary", () => {
    const sj = new Any({ hello: "world" });
    assert.deepStrictEqual(sj.numberOrNull(), null);
  });
  it("should return null from array", () => {
    const sj = new Any(["hello", "world"]);
    assert.deepStrictEqual(sj.numberOrNull(), null);
  });
  it("should return null from null", () => {
    const sj = new Any(null);
    assert.deepStrictEqual(sj.numberOrNull(), null);
  });
  it("should return null from undefined", () => {
    const sj = new Any(undefined);
    assert.deepStrictEqual(sj.numberOrNull(), null);
  });
  it("should return null from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new Any(func);
    assert.deepStrictEqual(sj.numberOrNull(), null);
  });
});
