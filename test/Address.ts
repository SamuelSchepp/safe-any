import { Any } from "../lib/Any";

export class Address {
  public readonly street: string;
  public readonly postCode: string;
  public readonly city: string;
  public readonly country: string;

  public constructor(json: Any) {
    this.street = json.get("street").stringValue();
    this.postCode = json.get("postCode").stringValue();
    this.city = json.get("city").stringValue();
    this.country = json.get("country").stringValue();
  }
}
