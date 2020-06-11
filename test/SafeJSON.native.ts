import { SafeAny } from "../lib/SafeAny";
import assert from "assert";

describe("SafeAny.native", () => {
  it("should return string", () => {
    assert.deepStrictEqual(new SafeAny("test").native(), "test");
  });
  it("should return number", () => {
    assert.deepStrictEqual(new SafeAny(123.435).native(), 123.435);
  });
  it("should return boolean", () => {
    assert.deepStrictEqual(new SafeAny(false).native(), false);
  });
  it("should return array", () => {
    assert.deepStrictEqual(new SafeAny([1, 2, 3]).native(), [1, 2, 3]);
  });
  it("should return dictionary", () => {
    assert.deepStrictEqual(new SafeAny({ key: "value" }).native(), { key: "value" });
  });
  it("should return null", () => {
    assert.deepStrictEqual(new SafeAny(null).native(), null);
  });
  it("should return class instance", () => {
    class MyClass {
      public constructor(public field: string) {
      }
    }

    const obj = new MyClass("test");
    const safeAny = new SafeAny(obj);
    assert.deepStrictEqual(safeAny.native(), obj);
    assert.deepStrictEqual((safeAny.native() as Record<string, unknown>).constructor.name, "MyClass");
    assert.deepStrictEqual((safeAny.native() as MyClass).field, "test");
  });
});
