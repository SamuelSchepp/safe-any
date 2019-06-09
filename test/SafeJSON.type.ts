import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";
import { Type } from "../lib/Type";

describe("SafeJSON", () => {
    describe("type", () => {
        it("should return Type.string", () => {
            assert.deepEqual(new SafeJSON("test").type, Type.string);
        });
        it("should return Type.number", () => {
            assert.deepEqual(new SafeJSON(123.435).type, Type.number);
        });
        it("should return Type.boolean", () => {
            assert.deepEqual(new SafeJSON(false).type, Type.boolean);
        });
        it("should return Type.array", () => {
            assert.deepEqual(new SafeJSON([1, 2, 3]).type, Type.array);
        });
        it("should return Type.dictionary", () => {
            assert.deepEqual(new SafeJSON({key: "value"}).type, Type.dictionary);
        });
        it("should return Type.null", () => {
            assert.deepEqual(new SafeJSON(null).type, Type.null);
        });
    });
});
