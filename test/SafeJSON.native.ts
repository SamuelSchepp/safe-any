import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny", () => {
    describe("native", () => {
        it("should return string", () => {
            assert.deepEqual(new SafeAny("test").native(), "test");
        });
        it("should return number", () => {
            assert.deepEqual(new SafeAny(123.435).native(), 123.435);
        });
        it("should return boolean", () => {
            assert.deepEqual(new SafeAny(false).native(), false);
        });
        it("should return array", () => {
            assert.deepEqual(new SafeAny([1, 2, 3]).native(), [1, 2, 3]);
        });
        it("should return dictionary", () => {
            assert.deepEqual(new SafeAny({key: "value"}).native(), {key: "value"});
        });
        it("should return null", () => {
            assert.deepEqual(new SafeAny(null).native(), null);
        });
        it("should return class instance", () => {
            class MyClass {
                constructor(public field: string) {
                }
            }
            const obj = new MyClass("test");
            const safeAny = new SafeAny(obj);
            assert.deepEqual(safeAny.native(), obj);
            assert.deepEqual(safeAny.native().constructor.name, "MyClass");
            assert.deepEqual(safeAny.native().field, "test");
        });
    });
});
