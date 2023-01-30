// INTERFACES

// STRICT USER_TYPES
interface UserInterface {
  name: string;
  address: string;
  city: string;
  zipCode: number;
}

// STRICT USER_TYPES
type numOrString = number | string;

export { UserInterface, numOrString };
