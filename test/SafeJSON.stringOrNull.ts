import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";

describe("SafeJSON", () => {
    describe("stringOrNull()", () => {
        it("should return \"hello, world\" from string", () => {
            const sj = new SafeJSON("hello, world");
            assert.deepEqual(sj.stringOrNull(), "hello, world");
        });
        it("should return \"hello, world\" from String", () => {
            const sj = new SafeJSON(String("hello, world"));
            assert.deepEqual(sj.stringOrNull(), "hello, world");
        });
        it("should return \"123.45\" from number", () => {
            const sj = new SafeJSON(123.45);
            assert.deepEqual(sj.stringOrNull(), "123.45");
        });
        it("shoule return \"123.45\" from Number", () => {
            const sj = new SafeJSON(Number(123.45));
            assert.deepEqual(sj.stringOrNull(), "123.45");
        });
        it("should return \"true\" from boolean", () => {
            const sj = new SafeJSON(true);
            assert.deepEqual(sj.stringOrNull(), "true");
        });
        it("should return \"false\" from Boolean", () => {
            const sj = new SafeJSON(Boolean(false));
            assert.deepEqual(sj.stringOrNull(), "false");
        });
        it("should return null from dictionary", () => {
            const sj = new SafeJSON({hello: "world"});
            assert.deepEqual(sj.stringOrNull(), null);
        });
        it("should return null from array", () => {
            const sj = new SafeJSON(["hello", "world"]);
            assert.deepEqual(sj.stringOrNull(), null);
        });
        it("should return null from null", () => {
            const sj = new SafeJSON(null);
            assert.deepEqual(sj.stringOrNull(), null);
        });
        it("should return null from undefined", () => {
            const sj = new SafeJSON(undefined);
            assert.deepEqual(sj.stringOrNull(), null);
        });
        it("should return null from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeJSON(func);
            assert.deepEqual(sj.stringOrNull(), null);
        });
    });
});
