# SafeAny

[![Build Status](https://travis-ci.org/SamuelSchepp/safe-any.svg?branch=master)](https://travis-ci.org/SamuelSchepp/safe-any)
[![Coverage Status](https://coveralls.io/repos/github/SamuelSchepp/safe-any/badge.svg?branch=master)](https://coveralls.io/github/SamuelSchepp/safe-any?branch=master)
[![Dependencies](https://david-dm.org/SamuelSchepp/safe-any.svg)](https://david-dm.org/)
![Node Version](https://img.shields.io/badge/node-%3E=%208.11-brightgreen.svg)

Safe wrapper for ```any``` and JSON in TypeScript.

Say goodbye to `TypeError: Cannot read property 'key' of undefinied`.

## Install

`npm i --save SamuelSchepp/safe-any#0.0.1`

## Quick start

```typescript
import { SafeAny } from "safe-any";

// Unsafe object
const parsedJSON: any = {
  persons: [
    {
      firstName: "John",
      lastName: "Appleseed",
    },
  ],
};

// Create safe object
const object = new SafeAny(parsedJSON);

// Safe access
const value = object
  .get("persons")
  .get(0)
  .get("firstName")
  .stringOrDefault("no name");

// value === "John"
```

## Guide

This libary makes access to objects of type `any` type-safe by providing default values and a typed interface.

### Getting started

Create a `SafeAny` object by either wrapping an `any` or parsing a JSON literal.
If the parsing fails, `new SafeAny(null)` will be returned.
`SafeAny.parseJSON()` does not throw.

```typescript
// Unsafe object, which may be the result of JSON.parse().
const unsafeObject: any = {
  ...
};
// Safe wrap
const safeObject = new SafeAny(unsafeObject);
```

```typescript
// Parse JSON literal and wrap safely
const safeObject = SafeAny.parseJSON("{ 'key': 'value' }");
```

### Referencing sub objects

```typescript
get(key: string | number): SafeAny
```

```typescript
const subValue1 = safeDictionary.get("key");
const subValue2 = safeArray.get(0);
```

Instead of accesing sub objects using the unsafe subscript access (`object['key']`), the `get()` operator is used.
If the root object is an array, use `get(2)` to access the 3rd value.
If the root object is a dictionary, use `get("key")` to access the value that is defined at the key `key`.
If the sub object cannot be accessed, because it does not exist or the root object's type is incompatible,
`new SafeAny(null)` is returned.

```typescript
const object = {
    myArray: [
        {
            name: "object1",
        },
        {
            name: "object2",
        },
        {
            name: "object3",
        },
    ],
};

const safeObject = new SafeAny(object);
const nameOfObject2 = safeObject
  .get("myArray")
  .get(1)
  .get("name")
  .stringValue();

// nameOfObject2 === "object2"
```

### Reading a value

- Returns `null` if value is not present or the conversion failed.

```typescript
stringOrNull(): string | null
numberOrNull(): number | null
booleanOrNull(): boolean | null
dictionaryOrNull(): { [key: string]: SafeAny } | null
arrayOrNull(): SafeAny[] | null
```

### Reading a value with given fallback

- Returns the given default value if value is not present or the conversion failed.

```typescript
stringOrDefault(value: string): string
numberOrDefault(value: number): number
booleanOrDefault(value: boolean): boolean
```

### Reading a value with conventional fallback

- Either returns the value or a conventional default value.

```typescript
stringValue(): string
numberValue(): number
booleanValue(): boolean
dictionaryValue(): { [key: string]: SafeAny }
arrayValue(): SafeAny[]
```

| Function            | Fallback Value |
|---------------------|----------------|
| `stringValue()`     | `""`           |
| `numberValue()`     | `0`            |
| `booleanValue()`    | `false`        |
| `dictionaryValue()` | `{}`           |
| `arrayValue()`      | `[]`           |

### Getting the object's type

The `type` property can be used to determin the object's type.
This is useful for custom parsing of tree structures or fallback mechanics.

Possible types are:
- `string`
- `number`
- `boolean`
- `dictionary`
- `array`
- `null`

```typescript
import { SafeAny, Type } from "safe-any";

const wrappedDict = new SafeAny({ key: "value" });

if (wrappedDict.type === Type.dictionary) {
  const entry = wrappedDict.get("key");
  // entry.type === Type.string
} else {
  console.log("The value is no dictionary.");
}
```

### Parsing embedded JSON string literals

If an object embeds a JSON string literal, use the `parsed()` operator to try parsing it into an object.
If the object is a string, this operator treats the value as a JSON string and tries to parse it into an object and returns it.

If the object is no string or the parsing failed, the current object will be returned without change.
This replaces the unhandy manual approach of breaking the operator chain.
```typescript
const obj = {
  jsonString: "{ \"hello\": \"world\" }",
};
const safeObject = new SafeAny(obj);

// Instead of
SafeAny.parsedJSON(safeObject.get("jsonString").stringValue()).get("hello").stringValue();

// Do this
safeObject.get("jsonString").parsed().get("hello").stringValue();
```
