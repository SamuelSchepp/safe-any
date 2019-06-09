import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";

describe("SafeJSON", () => {
    describe("arrayValue()", () => {
        it("should return [] from string", () => {
            const sj = new SafeJSON("hello, world");
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from String", () => {
            const sj = new SafeJSON(String("hello, world"));
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from number", () => {
            const sj = new SafeJSON(123.45);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("shoule return [] from Number", () => {
            const sj = new SafeJSON(Number(123.45));
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from boolean", () => {
            const sj = new SafeJSON(true);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from Boolean", () => {
            const sj = new SafeJSON(Boolean(true));
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from dictionary", () => {
            const sj = new SafeJSON({ hello: "world" });
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [\"hello\", \"world\"] from array", () => {
            const sj = new SafeJSON(["hello", "world"]);
            const a = sj.arrayValue();
            assert.deepEqual(a[0].stringOrNull(), "hello");
            assert.deepEqual(a[1].stringOrNull(), "world");
        });
        it("should return [] from null", () => {
            const sj = new SafeJSON(null);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from undefined", () => {
            const sj = new SafeJSON(undefined);
            assert.deepEqual(sj.arrayValue(), []);
        });
        it("should return [] from function", () => {
            const func = () => {
                return 3;
            };
            const sj = new SafeJSON(func);
            assert.deepEqual(sj.arrayValue(), []);
        });
    });
});
