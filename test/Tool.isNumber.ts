import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool", () => {
    describe("isNumber", () => {
        it("should return false from \"hello\"", () => {
            assert.deepEqual(Tool.isNumber("hello"), false);
        });
        it("should return false from String(\"hello\")", () => {
            assert.deepEqual(Tool.isNumber(String("hello")), false);
        });
        it("should return true from 1", () => {
            assert.deepEqual(Tool.isNumber(1), true);
        });
        it("should return true from Number(1)", () => {
            assert.deepEqual(Tool.isNumber(Number(1)), true);
        });
        it("should return false from true", () => {
            assert.deepEqual(Tool.isNumber(true), false);
        });
        it("should return false from Boolean(true)", () => {
            assert.deepEqual(Tool.isNumber(Boolean(true)), false);
        });
        it("should return false from null", () => {
            assert.deepEqual(Tool.isNumber(null), false);
        });
    });
});
