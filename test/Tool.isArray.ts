import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool", () => {
    describe("isArray", () => {
        it("should return false from \"hello\"", () => {
            assert.deepEqual(Tool.isArray("hello"), false);
        });
        it("should return false from {}", () => {
            assert.deepEqual(Tool.isArray({}), false);
        });
        it("should return true from []", () => {
            assert.deepEqual(Tool.isArray([]), true);
        });
        it("should return false from null", () => {
            assert.deepEqual(Tool.isArray(null), false);
        });
        it("should return false from undefined", () => {
            assert.deepEqual(Tool.isArray(undefined), false);
        });
    });
});
