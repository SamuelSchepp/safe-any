# SafeJSON

[![Build Status](https://travis-ci.org/SamuelSchepp/SafeJSON.svg?branch=master)](https://travis-ci.org/SamuelSchepp/SafeJSON)
[![Coverage Status](https://coveralls.io/repos/github/SamuelSchepp/SafeJSON/badge.svg?branch=master)](https://coveralls.io/github/SamuelSchepp/SafeJSON?branch=master)
![Dependencies](https://david-dm.org/SamuelSchepp/SafeJSON.svg)

Safe wrapper for ```any``` and JSON in TypeScript.

Say goodbye to `TypeError: Cannot read property 'key' of undefinied`.

## Install

`npm i --save SamuelSchepp/safe-json`

## Example
```typescript
import { SafeJSON, Type } from "safe-json";

// Parse JSON
const parsedJSON = {
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
