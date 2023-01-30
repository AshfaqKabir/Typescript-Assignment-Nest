// INTERFACES
import { UserInterface, numOrString } from "./interfaces/task-1";

interface PackageInterface {
  sender: Sender;
  recipient: Recipient;
  weight: number;
  costPerOunce: number;
  // Methods
  validateWeight(): numOrString;
  validateCost(): numOrString;
  packageCost(): number;
  packageInfo(): {
    Package: number;
    Sender: Sender;
    Recipient: Recipient;
    Cost: number;
  };
}

interface TwoDayPackageInterface {
  sender: Sender;
  recipient: Recipient;
  weight: number;
  costPerOunce: number;
  flatFee: number;
  // Methods
  calculateFee(): number;
}

interface OvernightPackageInterface {
  sender: Sender;
  recipient: Recipient;
  weight: number;
  costPerOunce: number;
  additionalFee: number;
  // Methods
  shippingCost(): number;
}

// Sender Class
class Sender implements UserInterface {
  name: string;
  address: string;
  city: string;
  zipCode: number;

  constructor(name: string, address: string, city: string, zipCode: number) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.zipCode = zipCode;
  }
}

// Recipient
class Recipient implements UserInterface {
  name: string;
  address: string;
  city: string;
  zipCode: number;

  constructor(name: string, address: string, city: string, zipCode: number) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.zipCode = zipCode;
  }
}

class Package implements PackageInterface {
  sender: Sender;
  recipient: Recipient;
  weight: number;
  costPerOunce: number;

  constructor(
    sender: Sender,
    recipient: Recipient,
    weight: number,
    costPerOunce: number
  ) {
    this.sender = sender;
    this.recipient = recipient;
    this.weight = weight;
    this.costPerOunce = costPerOunce;
  }

  // Validate Positive Value METHODS
  validateWeight(): number | string {
    let validated =
      this.weight >= 0 ? this.weight : "Please Input A Positive Value";
    return validated;
  }
  validateCost(): number | string {
    let validated =
      this.costPerOunce >= 0
        ? this.costPerOunce
        : "Please Input A Positive Value";
    return validated;
  }

  // Total Package Cost
  packageCost(): number {
    return this.weight * this.costPerOunce;
  }

  packageInfo(): {
    Package: number;
    Sender: Sender;
    Recipient: Recipient;
    Cost: number;
  } {
    return {
      Package: 1,
      Sender: this.sender,
      Recipient: this.recipient,
      Cost: this.packageCost(),
    };
  }
}

// Getting Error On THE  Number
// const recipient = new Recipient("Rifat", "5 Random Street", "Wales", 04003);

// TWO DAY PACKAGE CLASs
class TwoDayPackage
  extends Package
  implements PackageInterface, TwoDayPackageInterface
{
  flatFee: number;

  constructor(
    sender: Sender,
    recipient: Recipient,
    weight: number,
    costPerOunce: number,
    flatFee: number
  ) {
    super(sender, recipient, weight, costPerOunce);
    this.flatFee = flatFee;
  }

  calculateFee(): number {
    return super.packageCost() + this.flatFee;
  }
}

// OVERNIGHT PACKAGE CLASS
class OvernightPackage
  extends Package
  implements PackageInterface, OvernightPackageInterface
{
  additionalFee: number;

  constructor(
    sender: Sender,
    recipient: Recipient,
    weight: number,
    costPerOunce: number,
    additionalFee: number
  ) {
    super(sender, recipient, weight, costPerOunce);
    this.additionalFee = additionalFee;
  }

  shippingCost(): number {
    return super.packageCost() + this.additionalFee;
  }
}

export { Sender, Recipient, Package, TwoDayPackage, OvernightPackage };
