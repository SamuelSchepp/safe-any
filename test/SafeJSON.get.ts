import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";
import { Type } from "../lib/Type";

describe("SafeJSON", () => {
    describe("get(key)", () => {
        it("should return \"value\"", () => {
            const sj = new SafeJSON({
                level1: {
                    level2: {
                        key: "value",
                    },
                },
            });
            assert.deepEqual(sj.get("level1").get("level2").get("key").stringValue(), "value");
        });
        it("should return \"world\"", () => {
            const sj = new SafeJSON({
                level1: {
                    level2: [
                        {

                        },
                        {
                            hello: "world",
                        },
                        {

                        },
                    ],
                },
            });
            assert.deepEqual(sj.get("level1").get("level2").get(1).get("hello").stringValue(), "world");
        });
        it("should return null", () => {
            const sj = new SafeJSON({
                level1: {
                },
            });
            assert.deepEqual(sj.get("level1").get("level2").get(1).get("hello").stringOrNull(), null);
        });
        it("should return \"John\"", () => {
            const parsedJSON = {
                persons: [
                    {
                        firstName: "John",
                        lastName: "Appleseed",
                    },
                ],
            };
            const object = new SafeJSON(parsedJSON);
            const value = object
                .get("persons")
                .get(0)
                .get("firstName")
                .stringOrDefault("no name");
            assert.deepEqual(value, "John");
        });
        it("should return \"value\"", () => {
            const sj = new SafeJSON(
                [
                    [],
                    [
                        [
                            "index0",
                            "value",
                            "index2",
                        ],
                    ],
                    [],
                ],
            );
            assert.deepEqual(sj.get(1).get(0).get(1).stringValue(), "value");
        });
        it("should return \"world\"", () => {
            const sj = new SafeJSON(
                [
                    {
                        level1: [
                            "index0",
                            "index1",
                            "index2",
                            "world",
                        ],
                    },
                ],
            );
            assert.deepEqual(sj.get(0).get("level1").get(3).stringValue(), "world");
        });
        it("should return null", () => {
            const sj = new SafeJSON(
                [
                ],
            );
            assert.deepEqual(sj.get(0).get("level1").get(3).stringOrNull(), null);
        });
        it("should return null at bad array index", () => {
            const sj = new SafeJSON(
                [
                    1,
                    2,
                    3,
                ],
            );
            assert.deepEqual(sj.get(0).numberOrNull(), 1);
            assert.deepEqual(sj.get(1).numberOrNull(), 2);
            assert.deepEqual(sj.get(2).numberOrNull(), 3);
            assert.deepEqual(sj.get(3).numberOrNull(), null);
            assert.deepEqual(sj.get(8).numberOrNull(), null);
        });
        it("should return null with bad key type", () => {
            const sj = new SafeJSON({
                hello: "world",
            });
            assert.deepEqual(sj.get({} as any).type, Type.null);
        });
    });
});
