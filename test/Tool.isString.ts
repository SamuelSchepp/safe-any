import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool", () => {
    describe("isString", () => {
        it("should return true from \"hello\"", () => {
            assert.deepEqual(Tool.isString("hello"), true);
        });
        it("should return true from String(\"hello\")", () => {
            assert.deepEqual(Tool.isString(String("hello")), true);
        });
        it("should return false from 1", () => {
            assert.deepEqual(Tool.isString(1), false);
        });
        it("should return false from Number(1)", () => {
            assert.deepEqual(Tool.isString(Number(1)), false);
        });
        it("should return false from true", () => {
            assert.deepEqual(Tool.isString(true), false);
        });
        it("should return false from Boolean(true)", () => {
            assert.deepEqual(Tool.isNumber(Boolean(true)), false);
        });
        it("should return false from null", () => {
            assert.deepEqual(Tool.isString(null), false);
        });
    });
});
