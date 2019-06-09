
/**
 * A wrapper for `any` with a safe access interface.
 */
export declare class SafeJSON {
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
    static parseJSON(json: string): SafeJSON;
    /**
     * Returns true, if the given value is a native string.
     * @param value The value to check.
     */
    private static isString;
    /**
     * Returns true, if the given value is a native number.
     * @param value The value to check.
     */
    private static isNumber;
    /**
     * Returns true, if the given value is a native boolean.
     * @param value The value to check.
     */
    private static isBoolean;
    /**
     * Returns true, if the given value is a native array.
     * @param value The value to check.
     */
    private static isArray;
    /**
     * Returns true, if the given value is a native dictionary.
     * @param value The value to check.
     */
    private static isDictionary;
    /**
     * Maps every value of a dictionary.
     *
     * @param dict The dictionary whose values to map.
     * @param map The function that will be applied to every value of the dictionary,
     */
    private static mapValue;
    /**
     * The type of the current root object.
     * This can be used to make decision on futher handling.
     */
    readonly type: Type;
    /**
     * The actual native object, that is wrapped by this class.
     */
    private readonly raw;
    /**
     * Default constructor to create the safe interface to `any`.
     * @param object An object that is the result of a JSON parse or any literal.
     */
    constructor(object: any);
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
    stringOrNull(): string | null;
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
    numberOrNull(): number | null;
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
    booleanOrNull(): boolean | null;
    /**
     * Tries to return the given object as a dictionary.
     *
     * @return A dictionary value or `null`.
     */
    dictionaryOrNull(): {
        [key: string]: SafeJSON;
    } | null;
    /**
     * Tries to return the given object as an array.
     *
     * @return An array value or `null`.
     */
    arrayOrNull(): SafeJSON[] | null;
    /**
     * Tries to return the given object as a string.
     * If the conversion failes, `""` is returned.
     *
     * See [[stringOrNull]] for conversion rules.
     *
     * @returns A string value or `""`.
     */
    stringValue(): string;
    /**
     * Tries to return the given object as a number.
     * If the conversion failes, `0` is returned.
     *
     * See [[numberOrNull]] for conversion rules.
     *
     * @returns A number value or `0`.
     */
    numberValue(): number;
    /**
     * Tries to return the given object as a boolean.
     * If the conversion failes, `false` is returned.
     *
     * See [[booleanOrNull]] for conversion rules.
     *
     * @returns A boolean value or `false`.
     */
    booleanValue(): boolean;
    /**
     * Tries to return the given object as a native dictionary.
     * If the the object is no dictionary, `{}` is returned.
     *
     * The values are wrapped in `SafeJSON`.
     *
     * @returns A valid dictionary.
     */
    dictionaryValue(): {
        [key: string]: SafeJSON;
    };
    /**
     * Tries to return the given object as a native array.
     * If the the object is no array, `[]` is returned.
     *
     * The values are wrapped in `SafeJSON`.
     *
     * @returns A valid array.
     */
    arrayValue(): SafeJSON[];
    /**
     * Tries to convert the object to a string value.
     * If the conversion failed, the default value `value` will be returned.
     *
     * See [[stringOrNull]] for conversion rules.
     *
     * @param value The fallback value that will be returned if conversion failed.
     */
    stringOrDefault(value: string): string;
    /**
     * Tries to convert the object to a number value.
     * If the conversion failed, the default value `value` will be returned.
     *
     * See [[numberOrNull]] for conversion rules.
     *
     * @param value The fallback value that will be returned if conversion failed.
     */
    numberOrDefault(value: number): number;
    /**
     * Tries to convert the object to a boolean value.
     * If the conversion failed, the default value `value` will be returned.
     *
     * See [[booleanOrNull]] for conversion rules.
     *
     * @param value The fallback value that will be returned if conversion failed.
     */
    booleanOrDefault(value: boolean): boolean;
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
    get(key: string | number): SafeJSON;
}

/**
 * An enum that represents the various types of a JSON object.
 */
export declare enum Type {
    string = 0,
    number = 1,
    boolean = 2,
    dictionary = 3,
    array = 4,
    null = 5
}

















