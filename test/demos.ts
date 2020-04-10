import assert from "assert";
import { SafeAny } from "../lib/SafeAny";
import { Type } from "../lib/Type";

// tslint:disable max-classes-per-file

class Person {
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly address: Address;

    constructor(json: SafeAny) {
        this.firstName = json.get("firstName").stringValue();
        this.lastName = json.get("lastName").stringValue();
        this.address = new Address(json.get("address"));
    }
}

class Address {
    public readonly street: string;
    public readonly postCode: string;
    public readonly city: string;
    public readonly country: string;

    constructor(json: SafeAny) {
        this.street = json.get("street").stringValue();
        this.postCode = json.get("postCode").stringValue();
        this.city = json.get("city").stringValue();
        this.country = json.get("country").stringValue();
    }
}

describe("Demos", () => {
    it("should return \"John\"", () => {
        const parsedJSON = {
            persons: [
                {
                    firstName: "John",
                    lastName: "Appleseed",
                },
            ],
        };
        const object = new SafeAny(parsedJSON);
        const value = object
            .get("persons")
            .get(0)
            .get("firstName")
            .stringOrDefault("no name");

        assert.deepStrictEqual(value, "John");
        assert.deepStrictEqual(object.type, Type.dictionary);
        assert.deepStrictEqual(object.get("persons").type, Type.array);
    });
    it("should parse tree object Person", () => {
        const json = `
        [
            {
                "firstName": "John",
                "lastName": "Appleseed",
                "address": {
                    "street": "Main Street 1",
                    "postCode": 2213,
                    "city": "Washington DC",
                    "country": "USA"
                }
            },
            {
                "firstName": "Max",
                "lastName": "Mustermann",
                "address": {
                    "street": "Hauptstraße 1",
                    "postCode": 34223,
                    "city": "Berlin",
                    "country": "Germany"
                }
            }
        ]
        `;

        const arr = SafeAny.parseJSON(json);
        const persons = arr.arrayValue().map((obj: SafeAny) => {
            return new Person(obj);
        });

        assert.deepStrictEqual(persons[0].firstName, "John");
        assert.deepStrictEqual(persons[0].lastName, "Appleseed");
        assert.deepStrictEqual(persons[0].address.street, "Main Street 1");
        assert.deepStrictEqual(persons[0].address.postCode, "2213");
        assert.deepStrictEqual(persons[0].address.city, "Washington DC");
        assert.deepStrictEqual(persons[0].address.country, "USA");

        assert.deepStrictEqual(persons[1].firstName, "Max");
        assert.deepStrictEqual(persons[1].lastName, "Mustermann");
        assert.deepStrictEqual(persons[1].address.street, "Hauptstraße 1");
        assert.deepStrictEqual(persons[1].address.postCode, "34223");
        assert.deepStrictEqual(persons[1].address.city, "Berlin");
        assert.deepStrictEqual(persons[1].address.country, "Germany");
    });
    it("should parse empty Person", () => {
        const json = `
        [
            {

            },
            {

            }
        ]
        `;

        const arr = SafeAny.parseJSON(json);
        const persons = arr.arrayValue().map((obj: SafeAny) => {
            return new Person(obj);
        });

        assert.deepStrictEqual(persons[0].firstName, "");
        assert.deepStrictEqual(persons[0].lastName, "");
        assert.deepStrictEqual(persons[0].address.street, "");
        assert.deepStrictEqual(persons[0].address.postCode, "");
        assert.deepStrictEqual(persons[0].address.city, "");
        assert.deepStrictEqual(persons[0].address.country, "");

        assert.deepStrictEqual(persons[1].firstName, "");
        assert.deepStrictEqual(persons[1].lastName, "");
        assert.deepStrictEqual(persons[1].address.street, "");
        assert.deepStrictEqual(persons[1].address.postCode, "");
        assert.deepStrictEqual(persons[1].address.city, "");
        assert.deepStrictEqual(persons[1].address.country, "");
    });
    it("should return correct value", () => {
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
        const nameOfObject2 = safeObject.get("myArray").get(1).get("name").stringValue();

        assert.deepStrictEqual(nameOfObject2, "object2");
    });
    it("should be a dictionary", () => {
        const wrappedDict = new SafeAny({ key: "value" });
        if (wrappedDict.type === Type.dictionary) {
            const value = wrappedDict.get("key").stringValue();
            assert.deepStrictEqual(value, "value");
        } else {
            assert.fail();
        }
    });
});
