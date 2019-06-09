import { Type } from "./Type";

/**
 * A wrapper for `any` with a safe access interface.
 */
export class SafeJSON {

    // Custom initializer

    /**
     * Parses the json literal using `JSON.parse()`.
     *
     * If the JSON failed to parse, a valid `SafeJSON` object is still returned.
     * The `type` property of this object has the value `Type.null`.
     *
     * Only use this, if the parse error can be ignored.
     * This function does not throw.
     *
     * @param json A json string literal that should be parsed.
     */
    public static parseJSON(json: string): SafeJSON {
        try {
            const data = JSON.parse(json);
            return new SafeJSON(data);
        } catch {
            return new SafeJSON(null);
        }
    }

    // Helper functions

    /**
     * Returns true, if the given value is a native string.
     * @param value The value to check.
     */
    private static isString(value: any): boolean {
        return typeof value === "string" || value instanceof String;
    }

    /**
     * Returns true, if the given value is a native number.
     * @param value The value to check.
     */
    private static isNumber(value: any): boolean {
        return typeof value === "number" && isFinite(value);
    }

    /**
     * Returns true, if the given value is a native boolean.
     * @param value The value to check.
     */
    private static isBoolean(value: any): boolean {
        return typeof value === "boolean";
    }

    /**
     * Returns true, if the given value is a native array.
     * @param value The value to check.
     */
    private static isArray(value: any): boolean {
        return value && typeof value === "object" && value.constructor === Array;
    }

    /**
     * Returns true, if the given value is a native dictionary.
     * @param value The value to check.
     */
    private static isDictionary(value: any): boolean {
        return value && typeof value === "object" && value.constructor === Object;
    }

    /**
     * Maps every value of a dictionary.
     *
     * @param dict The dictionary whose values to map.
     * @param map The function that will be applied to every value of the dictionary,
     */
    private static mapValue<A, B>(dict: { [key: string]: A; }, map: (value: A) => B): { [key: string]: B; } {
        const akku: { [key: string]: B } = {};

        Object.keys(dict).forEach((key: string) => {
            akku[key] = map(dict[key]);
        });

        return akku;
    }

    // Properties

    /**
     * The type of the current root object.
     * This can be used to make decision on futher handling.
     */
    public readonly type: Type;

    /**
     * The actual native object, that is wrapped by this class.
     */
    private readonly raw: any;

    // Constructor

    /**
     * Default constructor to create the safe interface to `any`.
     * @param object An object that is the result of a JSON parse or any literal.
     */
    constructor(object: any) {
        this.raw = object;

        if (SafeJSON.isString(object)) {
            this.type = Type.string;
        } else if (SafeJSON.isNumber(object)) {
            this.type = Type.number;
        } else if (SafeJSON.isBoolean(object)) {
            this.type = Type.boolean;
        } else if (SafeJSON.isArray(object)) {
            this.type = Type.array;
        } else if (SafeJSON.isDictionary(object)) {
            this.type = Type.dictionary;
        } else  {
            this.type = Type.null;
        }
    }

    // OrNull interface

    /**
     * Tries to parse a string value and returns it.
     *
     * A number is converted to a string using `toString()`.
     *
     * A boolean is converted to a string:
     * - `true`: `"true"`
     * - `false`: `"false"`
     *
     * @return A string value or `null` if it cannot be converted.
     */
    public stringOrNull(): string | null {
        switch (this.type) {
            case Type.string: {
                return this.raw;
            }
            case Type.number: {
                return (this.raw as number).toString();
            }
            case Type.boolean: {
                if (this.raw as boolean) {
                    return "true";
                } else {
                    return "false";
                }
            }
            case Type.dictionary: return null;
            case Type.array: return null;
            case Type.null: return null;
        }
    }

    /**
     * Tries to parse a number value and returns it.
     *
     * A string is converted to a number using `Number()` constructor.
     * If the result is `NaN`, `null` will be returned.
     *
     * A boolean is converted to a number:
     * - `true`: `1`
     * - `false`: `0`
     *
     * @return A number value or `null` if it cannot be converted.
     */
    public numberOrNull(): number | null {
        switch (this.type) {
            case Type.string: {
                const n = Number(this.raw);
                if (isNaN(n)) {
                    return null;
                } else {
                    return n;
                }
            }
            case Type.number: {
                return (this.raw as number);
            }
            case Type.boolean: {
                if (this.raw as boolean) {
                    return 1;
                } else {
                    return 0;
                }
            }
            case Type.dictionary: return null;
            case Type.array: return null;
            case Type.null: return null;
        }
    }

    /**
     * Tries to parse a boolean value and returns it.
     *
     * A string is converted to a boolean:
     * - `"true"`: `true`
     * - `"false"`: `false`
     *
     * A number is converted to a boolean:
     * - `0`: `false`
     * - any other number: `true`
     *
     * @return A number value or `null` if it cannot be converted.
     */
    public booleanOrNull(): boolean | null {
        switch (this.type) {
            case Type.string: {
                if (this.raw === "true") {
                    return true;
                } else if (this.raw === "false") {
                    return false;
                } else {
                    return null;
                }
            }
            case Type.number: {
                if (this.raw === 0) {
                    return false;
                } else {
                    return true;
                }
            }
            case Type.boolean: {
                return this.raw;
            }
            case Type.dictionary: return null;
            case Type.array: return null;
            case Type.null: return null;
        }
    }

    /**
     * Tries to return the given object as a dictionary.
     *
     * @return A dictionary value or `null`.
     */
    public dictionaryOrNull(): { [key: string]: SafeJSON } | null {
        if (this.type === Type.dictionary) {
            return SafeJSON.mapValue(this.raw, (value: any) => {
                return new SafeJSON(value);
            });
        } else {
            return null;
        }
    }

    /**
     * Tries to return the given object as an array.
     *
     * @return An array value or `null`.
     */
    public arrayOrNull(): SafeJSON[] | null {
        if (this.type === Type.array) {
            return (this.raw as any[]).map((value) => {
                return new SafeJSON(value);
            });
        } else {
            return null;
        }
    }

    // Value interface

    /**
     * Tries to return the given object as a string.
     * If the conversion failes, `""` is returned.
     *
     * See [[stringOrNull]] for conversion rules.
     *
     * @returns A string value or `""`.
     */
    public stringValue(): string {
        return this.stringOrDefault("");
    }

    /**
     * Tries to return the given object as a number.
     * If the conversion failes, `0` is returned.
     *
     * See [[numberOrNull]] for conversion rules.
     *
     * @returns A number value or `0`.
     */
    public numberValue(): number {
        return this.numberOrDefault(0);
    }

    /**
     * Tries to return the given object as a boolean.
     * If the conversion failes, `false` is returned.
     *
     * See [[booleanOrNull]] for conversion rules.
     *
     * @returns A boolean value or `false`.
     */
    public booleanValue(): boolean {
        return this.booleanOrDefault(false);
    }

    /**
     * Tries to return the given object as a native dictionary.
     * If the the object is no dictionary, `{}` is returned.
     *
     * The values are wrapped in `SafeJSON`.
     *
     * @returns A valid dictionary.
     */
    public dictionaryValue(): { [key: string]: SafeJSON } {
        if (this.type === Type.dictionary) {
            return SafeJSON.mapValue(this.raw, (value: any) => {
                return new SafeJSON(value);
            });
        } else {
            return {};
        }
    }

    /**
     * Tries to return the given object as a native array.
     * If the the object is no array, `[]` is returned.
     *
     * The values are wrapped in `SafeJSON`.
     *
     * @returns A valid array.
     */
    public arrayValue(): SafeJSON[] {
        if (this.type === Type.array) {
            return (this.raw as any[]).map((value) => {
                return new SafeJSON(value);
            });
        } else {
            return [];
        }
    }

    // OrDefault interface

    /**
     * Tries to convert the object to a string value.
     * If the conversion failed, the default value `value` will be returned.
     *
     * See [[stringOrNull]] for conversion rules.
     *
     * @param value The fallback value that will be returned if conversion failed.
     */
    public stringOrDefault(value: string): string {
        const s = this.stringOrNull();
        if (s === null) {
            return value;
        } else {
            return s;
        }
    }

    /**
     * Tries to convert the object to a number value.
     * If the conversion failed, the default value `value` will be returned.
     *
     * See [[numberOrNull]] for conversion rules.
     *
     * @param value The fallback value that will be returned if conversion failed.
     */
    public numberOrDefault(value: number): number {
        const n = this.numberOrNull();
        if (n === null) {
            return value;
        } else {
            return n;
        }
    }

    /**
     * Tries to convert the object to a boolean value.
     * If the conversion failed, the default value `value` will be returned.
     *
     * See [[booleanOrNull]] for conversion rules.
     *
     * @param value The fallback value that will be returned if conversion failed.
     */
    public booleanOrDefault(value: boolean): boolean {
        const b = this.booleanOrNull();
        if (b === null) {
            return value;
        } else {
            return b;
        }
    }

    // Direct dictionary access

    /**
     * This function will try to return a wrapped child object.
     * Use this function if the object is assumed to be a dictionary or an array.
     * If `key` is a string, the root object is considered to be a dictionary and object at that key is beeing wrapped
     * and returned.
     * If `key` is a number, the root object is considered to be an array and the value at that index is beeing wrapped
     * and returned.
     *
     * `SafeJSON(null)` will be returned if the child cannot be accessed, or the type of `key` is not compatible with
     * the subscript signature of the root object.
     *
     * @param key The key that should be used to access the child object.
     */
    public get(key: string | number): SafeJSON {
        if (SafeJSON.isString(key)) {
            if (this.type === Type.dictionary) {
                return new SafeJSON(this.raw[key]);
            } else {
                return new SafeJSON(null);
            }
        } else if (SafeJSON.isNumber(key)) {
            if (this.type === Type.array) {
                return new SafeJSON(this.raw[key]);
            } else {
                return new SafeJSON(null);
            }
        } else {
            return new SafeJSON(null);
        }
    }
}
