import { Cart, myCart } from "../task-2";

// jest.mock("../task-2");

describe("Checking the Instance of cart Class", () => {
  // const customCart = jest.spyOn(myCart)
  it("myCart Should be a instance of Cart", () => {
    expect(myCart).toBeInstanceOf(Cart);
  });
});

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
