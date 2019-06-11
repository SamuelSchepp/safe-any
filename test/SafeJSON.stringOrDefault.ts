import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny", () => {
    describe("stringOrDefault()", () => {
        it("should return \"hello, world\" from string", () => {
            const sj = new SafeAny("hello, world");
            assert.deepEqual(sj.stringOrDefault("hello"), "hello, world");
        });
        it("should return \"hello, world\" from String", () => {
            const sj = new SafeAny(String("hello, world"));
            assert.deepEqual(sj.stringOrDefault("hello"), "hello, world");
        });
        it("should return \"123.45\" from number", () => {
            const sj = new SafeAny(123.45);
            assert.deepEqual(sj.stringOrDefault("hello"), "123.45");
        });
        it("shoule return \"123.45\" from Number", () => {
            const sj = new SafeAny(Number(123.45));
            assert.deepEqual(sj.stringOrDefault("hello"), "123.45");
        });
        it("should return \"true\" from boolean", () => {
            const sj = new SafeAny(true);
            assert.deepEqual(sj.stringOrDefault("hello"), "true");
        });
        it("should return \"false\" from Boolean", () => {
            const sj = new SafeAny(Boolean(false));
            assert.deepEqual(sj.stringOrDefault("hello"), "false");
        });
        it("should return \"hello\" from dictionary", () => {
            const sj = new SafeAny({hello: "world"});
            assert.deepEqual(sj.stringOrDefault("hello"), "hello");
        });
        it("should return \"hello\" from array", () => {
            const sj = new SafeAny(["hello", "world"]);
            assert.deepEqual(sj.stringOrDefault("hello"), "hello");
        });
        it("should return \"hello\" from null", () => {
            const sj = new SafeAny(null);
            assert.deepEqual(sj.stringOrDefault("hello"), "hello");
        });
        it("should return \"hello\" from undefined", () => {
            const sj = new SafeAny(undefined);
            assert.deepEqual(sj.stringOrDefault("hello"), "hello");
        });
        it("should return \"hello\" from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeAny(func);
            assert.deepEqual(sj.stringOrDefault("hello"), "hello");
        });
    });
});
