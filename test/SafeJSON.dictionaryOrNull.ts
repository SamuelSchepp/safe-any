import assert from "assert";
import { SafeAny } from "../lib/SafeAny";

describe("SafeAny", () => {
    describe("dictionaryOrNull()", () => {
        it("should return null from string", () => {
            const sj = new SafeAny("hello, world");
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return null from String", () => {
            const sj = new SafeAny(String("hello, world"));
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return null from number", () => {
            const sj = new SafeAny(123.45);
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("shoule return null from Number", () => {
            const sj = new SafeAny(Number(123.45));
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return null from boolean", () => {
            const sj = new SafeAny(true);
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return null from Boolean", () => {
            const sj = new SafeAny(Boolean(true));
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return { hello: \"world\" } from dictionary", () => {
            const sj = new SafeAny({ hello: "world" });
            const d = sj.dictionaryOrNull();
            if (d == null) {
                assert.fail();
            } else {
                assert.deepStrictEqual(d.hello.stringOrNull(), "world");
            }
        });
        it("should return null from array", () => {
            const sj = new SafeAny(["hello", "world"]);
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return null from null", () => {
            const sj = new SafeAny(null);
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return null from undefined", () => {
            const sj = new SafeAny(undefined);
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
        it("should return null from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeAny(func);
            assert.deepStrictEqual(sj.dictionaryOrNull(), null);
        });
    });
});
