import { Address } from "./Address";
import { SafeAny } from "../lib/SafeAny";

export class Person {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly address: Address;

  public constructor(json: SafeAny) {
    this.firstName = json.get("firstName").stringValue();
    this.lastName = json.get("lastName").stringValue();
    this.address = new Address(json.get("address"));
  }
}
