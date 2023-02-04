import {
  Sender,
  Recipient,
  Package,
  TwoDayPackage,
  OvernightPackage,
} from "../task-1";

// USERS
const sender: Sender = new Sender("Ashfaq", "1 GWG Street", "London", 1200);
const recipient: Recipient = new Recipient(
  "Kabir",
  "5 Brooke Street",
  "London",
  3014
);

// Packages
const package1: Package = new Package(sender, recipient, 5, 10);
// overNightPackage
const package2: Package = new Package(sender, recipient, 30, 10);

// Extras
const twoDayPackage: TwoDayPackage = new TwoDayPackage(
  package1.sender,
  package1.recipient,
  package1.weight,
  package1.costPerOunce,
  10
);

const overnightPackage: OvernightPackage = new OvernightPackage(
  package2.sender,
  package2.recipient,
  package2.weight,
  package2.costPerOunce,
  30
);

describe("Testing the Instances of Classes", () => {
  // Checking Instance of Sender Class
  it("const sender Should be the Instance of Sender Class", () => {
    expect(sender).toBeInstanceOf(Sender);
  });

  // Checking Instance of Recipient Class
  it("const recipient Should be the Instance of Recipient Class", () => {
    expect(recipient).toBeInstanceOf(Recipient);
  });

  // Checking Instance of Package Class
  it("const package1 and package2  Should be the Instance of Package Class", () => {
    expect(package1).toBeInstanceOf(Package);
    expect(package2).toBeInstanceOf(Package);
  });

  // Checking Instance of TwoDayPackage Class
  it("const twoDayPackage  Should be the Instance of TwoDayPackage Class", () => {
    expect(twoDayPackage).toBeInstanceOf(TwoDayPackage);
  });

  // Checking Instance of OvernightPackage Class
  it("const overnightPackage  Should be the Instance of OvernightPackage Class", () => {
    expect(overnightPackage).toBeInstanceOf(OvernightPackage);
  });
});

describe("Packages Test", () => {
  // USER CLASS TESTS
  it(`should return the sender Info: sender`, () => {
    expect(new Sender("Ashfaq", "1 GWG Street", "London", 1200)).toStrictEqual(
      sender
    );
  });
  it("should return the recipient Info: recipient", () => {
    expect(
      new Recipient("Kabir", "5 Brooke Street", "London", 3014)
    ).toStrictEqual(recipient);
  });

  // Pakcages Cost
  it(`Basic Pakcage Cost Should Return 50 package1.packageCost()`, () => {
    expect(package1.packageCost()).toBe(50);
  });
  it(`TwoDay Pakcage Cost Should Return 50 twoDayPackage.calculateFee()`, () => {
    expect(twoDayPackage.calculateFee()).toBe(60);
  });
  it(`OverNight Pakcage Cost Should Return 50 overnightPackage.shippingCost()`, () => {
    expect(overnightPackage.shippingCost()).toBe(330);
  });
});
