import { Address } from "./Address";
import { Any } from "../lib/Any";

export class Person {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly address: Address;

  public constructor(json: Any) {
    this.firstName = json.get("firstName").stringValue();
    this.lastName = json.get("lastName").stringValue();
    this.address = new Address(json.get("address"));
  }
}
