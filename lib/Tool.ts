/**
 * Helper class for SafeAny implementation
 */
export class Tool {
    /**
     * Returns true, if the given value is a native string.
     * @param value The value to check.
     */
    public static isString(value: any): value is string {
        return typeof value === "string" || value instanceof String;
    }

    /**
     * Returns true, if the given value is a native number.
     * @param value The value to check.
     */
    public static isNumber(value: any): value is number {
        return typeof value === "number" && isFinite(value);
    }

    /**
     * Returns true, if the given value is a native boolean.
     * @param value The value to check.
     */
    public static isBoolean(value: any): value is boolean {
        return typeof value === "boolean";
    }

    /**
     * Returns true, if the given value is a native array.
     * @param value The value to check.
     */
    public static isArray(value: any): value is any[] {
        return value != null && typeof value === "object" && value.constructor === Array;
    }

    /**
     * Returns true, if the given value is a native dictionary.
     * @param value The value to check.
     */
    public static isDictionary(value: any): value is {[key: string]: any} {
        return value != null && typeof value === "object" && value.constructor !== Array;
    }

    /**
     * Maps every value of a dictionary.
     *
     * @param dict The dictionary whose values to map.
     * @param map The function that will be applied to every value of the dictionary,
     */
    public static mapValue<A, B>(dict: { [key: string]: A; }, map: (value: A) => B): { [key: string]: B; } {
        const akku: { [key: string]: B } = {};

        Object.keys(dict).forEach((key: string) => {
            akku[key] = map(dict[key]);
        });

        return akku;
    }
}
