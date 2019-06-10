# SafeJSON

[![Build Status](https://travis-ci.org/SamuelSchepp/SafeJSON.svg?branch=master)](https://travis-ci.org/SamuelSchepp/SafeJSON)
[![Coverage Status](https://coveralls.io/repos/github/SamuelSchepp/SafeJSON/badge.svg?branch=master)](https://coveralls.io/github/SamuelSchepp/SafeJSON?branch=master)
![Dependencies](https://david-dm.org/SamuelSchepp/SafeJSON.svg)

Safe wrapper for ```any``` and JSON in TypeScript.

Say goodbye to `TypeError: Cannot read property 'key' of undefinied`.

## Install

`npm i --save SamuelSchepp/safe-json`

## Quick Start

```typescript
import { SafeJSON, Type } from "safe-json";

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
const object = new SafeJSON(parsedJSON);

// Safe access
const value = object
  .get("persons")
  .get(0)
  .get("firstName")
  .stringOrDefault("no name");

// firstName === "John"
```

## Guide

This libary makes access to objects of type `any` type-safe, by providing default values and a typed interface.

### Getting started

Create a `SafeJSON` object by either wrapping a `any` or parsing a JSON literal.

```typescript
const unsafeObject: any = {
  ...
};
const safeObject = new SafeJSON(unsafeObject);
```

```typescript
const safeObject = SafeJSON.parseJSON("{ 'key': 'value' }");
```

### Referencing sub-objects

```typescript
get(key: string | number): SafeJSON
```

```typescript
const subValue = object.get("key");
```

Instead of accesing sub objects using an unsafe subscript acces (`object['key']`), the `get()` operator is used.
If the root object is an array, use `get(2)` to access the 4th value.
If the root object is a dictionary, use `get("key")` to access the value that is defined at the key `key`.
If the sub object cannot be accessed, because it does not exist or the root object's type is incompatible,
`new SafeJSON(null)` is returned.

#### Example

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

const safeObject = new SafeJSON(object);
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
dictionaryOrNull(): { [key: string]: SafeJSON } | null
arrayOrNull(): SafeJSON[] | null
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

| Target Type  | Fallback Value |
|--------------|----------------|
| `string`     | `""`           |
| `number`     | `0`            |
| `boolean`    | `false`        |
| `Dictionary` | `{}`           |
| `Array`      | `[]`           |

```typescript
stringValue(): string
numberValue(): number
booleanValue(): boolean
dictionaryValue(): { [key: string]: SafeJSON }
arrayValue(): SafeJSON[]
```