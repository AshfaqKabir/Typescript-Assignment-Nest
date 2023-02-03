import { Cart, myCart } from "../task-2";

describe("Implementing SpyOn on Cart Methods with Parameters", () => {
  // Explicity Created for Testing Spies
  const myTestCard = new Cart();

  // addToCart Method Parameter SpyOn
  it(`addToCart Spy should be called with Parameters {id: 5, title: "cheese", unitPrice: 10, quantity: 5}`, () => {
    const addCartSpy = jest.spyOn(Cart.prototype, "addToCart");
    myTestCard.addToCart(5, "cheese", 10, 5);

    expect(addCartSpy).toHaveBeenCalledWith(5, "cheese", 10, 5);
  });

  // removeFromCart Method Parameter SpyOn
  it("Remove Cart Spy should be called with Parameters {id: 5, quantity: 2}", () => {
    const removeCartSpy = jest.spyOn(Cart.prototype, "removeFromCart");
    myTestCard.addToCart(5, "cheese", 10, 5);
    myTestCard.removeFromCart(5, 2);

    expect(removeCartSpy).toHaveBeenCalledWith(5, 2);
  });

  // applyDiscountCode Method Parameter SpyOn
  it("applyDiscountCode Cart Spy should be called with Parameters {id: 5, discountCode: 'DISCOUNT_10'}", () => {
    const discountCodeSpy = jest.spyOn(Cart.prototype, "applyDiscountCode");
    myTestCard.addToCart(5, "cheese", 10, 5);
    myTestCard.applyDiscountCode(5, "DISCOUNT_10");

    expect(discountCodeSpy).toHaveBeenCalledWith(5, "DISCOUNT_10");
  });

  // applyCartDiscountCode Method Parameter SpyOn
  it("applyDiscountCode Cart Spy should be called with Parameters {discountCode: 'DISCOUNT_30'}", () => {
    const cartDiscountCodeSpy = jest.spyOn(
      Cart.prototype,
      "applyCartDiscountCode"
    );
    myTestCard.addToCart(5, "cheese", 10, 5);
    myTestCard.applyCartDiscountCode("DISCOUNT_30");

    expect(cartDiscountCodeSpy).toHaveBeenCalledWith("DISCOUNT_30");
  });

  // getItemQuantity Method Parameter SpyOn
  it("getItemQuantity Cart Spy should be called with Parameters {id: 5}", () => {
    const getItemQuantitySpy = jest.spyOn(Cart.prototype, "getItemQuantity");
    myTestCard.addToCart(5, "cheese", 10, 5);
    myTestCard.getItemQuantity(5);

    expect(getItemQuantitySpy).toHaveBeenCalledWith(5);
  });

  // getItemTotalPrice Method Parameter SpyOn
  it("getItemTotalPrice Cart Spy should be called with Parameters {id: 5}", () => {
    const getItemTotalPriceSpy = jest.spyOn(
      Cart.prototype,
      "getItemTotalPrice"
    );
    myTestCard.addToCart(5, "cheese", 10, 5);
    myTestCard.getItemTotalPrice(5);

    expect(getItemTotalPriceSpy).toHaveBeenCalledWith(5);
  });
});

// Checking if myCart Is an Instance of Cart Class
describe("Checking the Instance of Cart Class", () => {
  it("myCart Should be a instance of Cart", () => {
    expect(myCart).toBeInstanceOf(Cart);
  });
});

// Testing Cart Class Functionalities
describe("Tests for Class Functionality", () => {
  // ADD ITEM
  it("myCart Length After adding 4 Items Should be 4", () => {
    myCart.addToCart(1, "Bread", 10, 5);
    myCart.addToCart(2, "Chocolate", 20, 2);
    myCart.addToCart(3, "Chips", 5, 5);
    myCart.addToCart(4, "Milk", 30, 5);
    expect(myCart.getCartLength()).toBe(4);
  });

  // ADDING SAME ITEM
  it("Should increase the Quantity and TotalPrice for an Existing item", () => {
    myCart.addToCart(1, "Bread", 10, 5);

    expect(myCart.getItemQuantity(1)).toBe(10);
  });

  // Removing The Itemclear
  it("Should Decrease the Quantity and TotalPrice for an Existing item by 8", () => {
    myCart.removeFromCart(1, 8);
    expect(myCart.getItemQuantity(1)).toBe(2);
    // REMOVES THE LIST FROM THE CART
    myCart.removeFromCart(1, 3);
    expect(myCart.getItemQuantity(1)).toBe("Item Not In The List");
  });

  // Applying Discount Code to the CART
  it("Should Add Discount to The Cart Item", () => {
    myCart.applyDiscountCode(2, "DISCOUNT_10");
    myCart.applyDiscountCode(4, "DISCOUNT_20");
    expect(myCart.getItemTotalPrice(2)).toBe(36);
    expect(myCart.getItemTotalPrice(4)).toBe(120);
  });

  // Applying Discount Code to the CART
  it("Should Add Discount to The WHOLE Cart", () => {
    expect(myCart.applyCartDiscountCode("DISCOUNT_20")).toBe(144.8);
    expect(myCart.applyCartDiscountCode("DISCOUNT_30")).toBe(126.7);
  });

  // Get Total Price Of the Cart
  it("Should Add Discount to The WHOLE Cart", () => {
    expect(myCart.getTotalPrice()).toBe(181);
  });
});
