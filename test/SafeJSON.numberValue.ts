import { SafeAny } from "../lib/SafeAny";
import assert from "assert";

describe("SafeAny.numberValue()", () => {
  it("should return 0 from string", () => {
    const sj = new SafeAny("hello, world");
    assert.deepStrictEqual(sj.numberValue(), 0);
  });
  it("should return 0 from String", () => {
    const sj = new SafeAny(String("hello, world"));
    assert.deepStrictEqual(sj.numberValue(), 0);
  });
  it("should return 311.34 from parsable string", () => {
    const sj = new SafeAny("311.34");
    assert.deepStrictEqual(sj.numberValue(), 311.34);
  });
  it("should return 23.4 from parsable String", () => {
    const sj = new SafeAny(String("23.4"));
    assert.deepStrictEqual(sj.numberValue(), 23.4);
  });
  it("should return 123.45 from number", () => {
    const sj = new SafeAny(123.45);
    assert.deepStrictEqual(sj.numberValue(), 123.45);
  });
  it("shoule return 123.45 from Number", () => {
    const sj = new SafeAny(Number(123.45));
    assert.deepStrictEqual(sj.numberValue(), 123.45);
  });
  it("should return 1 from boolean", () => {
    const sj = new SafeAny(true);
    assert.deepStrictEqual(sj.numberValue(), 1);
  });
  it("should return 1 from Boolean", () => {
    const sj = new SafeAny(Boolean(true));
    assert.deepStrictEqual(sj.numberValue(), 1);
  });
  it("should return 0 from dictionary", () => {
    const sj = new SafeAny({ hello: "world" });
    assert.deepStrictEqual(sj.numberValue(), 0);
  });
  it("should return 0 from array", () => {
    const sj = new SafeAny(["hello", "world"]);
    assert.deepStrictEqual(sj.numberValue(), 0);
  });
  it("should return 0 from null", () => {
    const sj = new SafeAny(null);
    assert.deepStrictEqual(sj.numberValue(), 0);
  });
  it("should return 0 from undefined", () => {
    const sj = new SafeAny(undefined);
    assert.deepStrictEqual(sj.numberValue(), 0);
  });
  it("should return 0 from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new SafeAny(func);
    assert.deepStrictEqual(sj.numberValue(), 0);
  });
});
