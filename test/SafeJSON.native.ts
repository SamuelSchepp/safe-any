import { Any } from "../lib/Any";
import assert from "assert";

describe("SafeAny.native", () => {
  it("should return string", () => {
    assert.deepStrictEqual(new Any("test").native(), "test");
  });
  it("should return number", () => {
    assert.deepStrictEqual(new Any(123.435).native(), 123.435);
  });
  it("should return boolean", () => {
    assert.deepStrictEqual(new Any(false).native(), false);
  });
  it("should return array", () => {
    assert.deepStrictEqual(new Any([1, 2, 3]).native(), [1, 2, 3]);
  });
  it("should return dictionary", () => {
    assert.deepStrictEqual(new Any({ key: "value" }).native(), { key: "value" });
  });
  it("should return null", () => {
    assert.deepStrictEqual(new Any(null).native(), null);
  });
  it("should return class instance", () => {
    class MyClass {
      public constructor(public field: string) {
      }
    }

    const obj = new MyClass("test");
    const safeAny = new Any(obj);
    assert.deepStrictEqual(safeAny.native(), obj);
    assert.deepStrictEqual((safeAny.native() as Record<string, unknown>).constructor.name, "MyClass");
    assert.deepStrictEqual((safeAny.native() as MyClass).field, "test");
  });
});
