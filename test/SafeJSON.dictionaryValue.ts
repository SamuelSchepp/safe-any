import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny.dictionaryValue()", () => {
  it("should return {} from string", () => {
    const sj = new SafeAny("hello, world");
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return {} from String", () => {
    const sj = new SafeAny(String("hello, world"));
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return {} from number", () => {
    const sj = new SafeAny(123.45);
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("shoule return {} from Number", () => {
    const sj = new SafeAny(Number(123.45));
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return {} from boolean", () => {
    const sj = new SafeAny(true);
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return {} from Boolean", () => {
    const sj = new SafeAny(Boolean(true));
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return { hello: \"world\" } from dictionary", () => {
    const sj = new SafeAny({ hello: "world" });
    assert.deepStrictEqual(sj.dictionaryValue().hello.stringOrNull(), "world");
  });
  it("should return {} from array", () => {
    const sj = new SafeAny(["hello", "world"]);
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return {} from null", () => {
    const sj = new SafeAny(null);
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return {} from undefined", () => {
    const sj = new SafeAny(undefined);
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
  it("should return {} from function", () => {
    const func = (): number => {
      return 3;
    };
    const sj = new SafeAny(func);
    assert.deepStrictEqual(sj.dictionaryValue(), {});
  });
});
