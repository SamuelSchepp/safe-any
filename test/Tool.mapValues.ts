import assert from "assert";
import { Tool } from "../lib/Tool";

describe("Tool.mapValues", () => {
    it("should return a dictionary with mapped values", () => {
        const input = {
            A: 0,
            B: 1,
            C: 2,
        };

        const result = Tool.mapValue(input, (value) => {
            return value + 65;
        });

        assert.deepStrictEqual(result, {
            A: 65,
            B: 66,
            C: 67,
        });
    });
});
