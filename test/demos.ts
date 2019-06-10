import assert from "assert";
import { SafeJSON } from "../lib/SafeJSON";
import { Type } from "../lib/Type";

// tslint:disable max-classes-per-file

class Person {
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly address: Address;

    constructor(json: SafeJSON) {
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

    constructor(json: SafeJSON) {
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
        const object = new SafeJSON(parsedJSON);
        const value = object
            .get("persons")
            .get(0)
            .get("firstName")
            .stringOrDefault("no name");

        assert.deepEqual(value, "John");
        assert.deepEqual(object.type, Type.dictionary);
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

        const arr = SafeJSON.parseJSON(json);
        const persons = arr.arrayValue().map((obj: SafeJSON) => {
            return new Person(obj);
        });

        assert.deepEqual(persons[0].firstName, "John");
        assert.deepEqual(persons[0].lastName, "Appleseed");
        assert.deepEqual(persons[0].address.street, "Main Street 1");
        assert.deepEqual(persons[0].address.postCode, "2213");
        assert.deepEqual(persons[0].address.city, "Washington DC");
        assert.deepEqual(persons[0].address.country, "USA");

        assert.deepEqual(persons[1].firstName, "Max");
        assert.deepEqual(persons[1].lastName, "Mustermann");
        assert.deepEqual(persons[1].address.street, "Hauptstraße 1");
        assert.deepEqual(persons[1].address.postCode, "34223");
        assert.deepEqual(persons[1].address.city, "Berlin");
        assert.deepEqual(persons[1].address.country, "Germany");
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

        const arr = SafeJSON.parseJSON(json);
        const persons = arr.arrayValue().map((obj: SafeJSON) => {
            return new Person(obj);
        });

        assert.deepEqual(persons[0].firstName, "");
        assert.deepEqual(persons[0].lastName, "");
        assert.deepEqual(persons[0].address.street, "");
        assert.deepEqual(persons[0].address.postCode, "");
        assert.deepEqual(persons[0].address.city, "");
        assert.deepEqual(persons[0].address.country, "");

        assert.deepEqual(persons[1].firstName, "");
        assert.deepEqual(persons[1].lastName, "");
        assert.deepEqual(persons[1].address.street, "");
        assert.deepEqual(persons[1].address.postCode, "");
        assert.deepEqual(persons[1].address.city, "");
        assert.deepEqual(persons[1].address.country, "");
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

        const safeObject = new SafeJSON(object);
        const nameOfObject2 = safeObject.get("myArray").get(1).get("name").stringValue();

        assert.deepEqual(nameOfObject2, "object2");
    });
    it("should be a dictionary", () => {
        const wrappedDict = new SafeJSON({ key: "value" });
        if (wrappedDict.type === Type.dictionary) {
            const value = wrappedDict.get("key").stringValue();
            assert.deepEqual(value, "value");
        } else {
            assert.fail();
        }
    });
});
