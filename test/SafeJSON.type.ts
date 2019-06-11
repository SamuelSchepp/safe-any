import assert from "assert";
import { SafeAny } from "../lib/SafeAny";
import { Type } from "../lib/Type";

describe("SafeAny", () => {
    describe("type", () => {
        it("should return Type.string", () => {
            assert.deepEqual(new SafeAny("test").type, Type.string);
        });
        it("should return Type.number", () => {
            assert.deepEqual(new SafeAny(123.435).type, Type.number);
        });
        it("should return Type.boolean", () => {
            assert.deepEqual(new SafeAny(false).type, Type.boolean);
        });
        it("should return Type.array", () => {
            assert.deepEqual(new SafeAny([1, 2, 3]).type, Type.array);
        });
        it("should return Type.dictionary", () => {
            assert.deepEqual(new SafeAny({key: "value"}).type, Type.dictionary);
        });
        it("should return Type.null", () => {
            assert.deepEqual(new SafeAny(null).type, Type.null);
        });
    });
});
