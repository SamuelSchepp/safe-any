import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";

describe("SafeJSON", () => {
    describe("stringValue()", () => {
        it("should return \"hello, world\" from string", () => {
            const sj = new SafeJSON("hello, world");
            assert.deepEqual(sj.stringValue(), "hello, world");
        });
        it("should return \"hello, world\" from String", () => {
            const sj = new SafeJSON(String("hello, world"));
            assert.deepEqual(sj.stringValue(), "hello, world");
        });
        it("should return \"123.45\" from number", () => {
            const sj = new SafeJSON(123.45);
            assert.deepEqual(sj.stringValue(), "123.45");
        });
        it("shoule return \"123.45\" from Number", () => {
            const sj = new SafeJSON(Number(123.45));
            assert.deepEqual(sj.stringValue(), "123.45");
        });
        it("should return \"false\" from boolean", () => {
            const sj = new SafeJSON(false);
            assert.deepEqual(sj.stringValue(), "false");
        });
        it("should return \"true\" from Boolean", () => {
            const sj = new SafeJSON(Boolean(true));
            assert.deepEqual(sj.stringValue(), "true");
        });
        it("should return \"\" from dictionary", () => {
            const sj = new SafeJSON({hello: "world"});
            assert.deepEqual(sj.stringValue(), "");
        });
        it("should return \"\" from array", () => {
            const sj = new SafeJSON(["hello", "world"]);
            assert.deepEqual(sj.stringValue(), "");
        });
        it("should return \"\" from null", () => {
            const sj = new SafeJSON(null);
            assert.deepEqual(sj.stringValue(), "");
        });
        it("should return \"\" from undefined", () => {
            const sj = new SafeJSON(undefined);
            assert.deepEqual(sj.stringValue(), "");
        });
        it("should return \"\" from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeJSON(func);
            assert.deepEqual(sj.stringValue(), "");
        });
    });
});
