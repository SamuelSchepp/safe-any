import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny", () => {
    describe("stringOrNull()", () => {
        it("should return \"hello, world\" from string", () => {
            const sj = new SafeAny("hello, world");
            assert.deepStrictEqual(sj.stringOrNull(), "hello, world");
        });
        it("should return \"hello, world\" from String", () => {
            const sj = new SafeAny(String("hello, world"));
            assert.deepStrictEqual(sj.stringOrNull(), "hello, world");
        });
        it("should return \"123.45\" from number", () => {
            const sj = new SafeAny(123.45);
            assert.deepStrictEqual(sj.stringOrNull(), "123.45");
        });
        it("shoule return \"123.45\" from Number", () => {
            const sj = new SafeAny(Number(123.45));
            assert.deepStrictEqual(sj.stringOrNull(), "123.45");
        });
        it("should return \"true\" from boolean", () => {
            const sj = new SafeAny(true);
            assert.deepStrictEqual(sj.stringOrNull(), "true");
        });
        it("should return \"false\" from Boolean", () => {
            const sj = new SafeAny(Boolean(false));
            assert.deepStrictEqual(sj.stringOrNull(), "false");
        });
        it("should return null from dictionary", () => {
            const sj = new SafeAny({hello: "world"});
            assert.deepStrictEqual(sj.stringOrNull(), null);
        });
        it("should return null from array", () => {
            const sj = new SafeAny(["hello", "world"]);
            assert.deepStrictEqual(sj.stringOrNull(), null);
        });
        it("should return null from null", () => {
            const sj = new SafeAny(null);
            assert.deepStrictEqual(sj.stringOrNull(), null);
        });
        it("should return null from undefined", () => {
            const sj = new SafeAny(undefined);
            assert.deepStrictEqual(sj.stringOrNull(), null);
        });
        it("should return null from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeAny(func);
            assert.deepStrictEqual(sj.stringOrNull(), null);
        });
    });
});
