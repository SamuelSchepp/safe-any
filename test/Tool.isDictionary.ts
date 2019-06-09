import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool", () => {
    describe("isDictionary", () => {
        it("should return false from \"hello\"", () => {
            assert.deepEqual(Tool.isDictionary("hello"), false);
        });
        it("should return true from {}", () => {
            assert.deepEqual(Tool.isDictionary({}), true);
        });
        it("should return false from []", () => {
            assert.deepEqual(Tool.isDictionary([]), false);
        });
        it("should return false from null", () => {
            assert.deepEqual(Tool.isDictionary(null), false);
        });
        it("should return false from undefined", () => {
            assert.deepEqual(Tool.isDictionary(undefined), false);
        });
    });
});
