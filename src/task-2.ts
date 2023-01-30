interface CartInterface {
  // Methiods
  addToCart(
    id: number,
    title: string,
    unitPrice: number,
    quantity: number,
    discountCode?: string
  ): void;
  removeFromCart(id: number, quantity: number): void;
  applyDiscountCode(id: number, discountCode: string): void;
  applyCartDiscountCode(discountCode: string): number;
  getItemTotalPrice(id: number): number | string;
  getTotalPrice(): number;
  getCartItems(): {}[];
}

interface CartItems {
  id: number;
  title: string;
  unitPrice: number;
  quantity: number;
  discountCode?: string;
  itemTotalPrice: number;
  cartTotalPrice?: number;
}

// DiscountCodes
const itemDiscountCodes: { [key: string]: number } = {
  DISCOUNT_05: 5,
  DISCOUNT_10: 10,
  DISCOUNT_20: 20,
};

const cartDiscountCodes: { [key: string]: number } = {
  DISCOUNT_05: 5,
  DISCOUNT_10: 10,
  DISCOUNT_20: 20,
  DISCOUNT_30: 30,
};

class Cart implements CartInterface {
  // Constructor
  constructor(private cartItems: CartItems[] = []) {}

  // ADDING TO CART METHOD
  addToCart(
    id: number,
    title: string,
    unitPrice: number,
    quantity: number,
    discountCode?: string
  ): void {
    let itemIsListed = this.cartItems.find((item) => item.id == id);
    itemIsListed
      ? ((itemIsListed.quantity += quantity),
        (itemIsListed.itemTotalPrice =
          itemIsListed.quantity * itemIsListed.unitPrice))
      : this.cartItems.push({
          id,
          title,
          unitPrice,
          quantity,
          discountCode,
          itemTotalPrice: unitPrice * quantity,
        });
  }

  // REMOVING FROM CART METHOD
  removeFromCart(id: number, quantity: number = 1): void {
    let itemIsListed = this.cartItems.find((item) => item.id == id);
    if (itemIsListed) {
      if (itemIsListed.quantity === 1 && quantity > 1) {
        throw new Error("You have Only One Quantity of this item");
      } else if (itemIsListed.quantity === quantity) {
        const index = this.cartItems.indexOf(itemIsListed);
        this.cartItems.splice(index, 1);
      } else if (quantity > itemIsListed.quantity) {
        const index = this.cartItems.indexOf(itemIsListed);
        this.cartItems.splice(index, 1);
      } else if (itemIsListed.quantity > 1) {
        if (quantity == itemIsListed.quantity && quantity == 1) {
          const index = this.cartItems.indexOf(itemIsListed);
          this.cartItems.splice(index, 1);
        } else {
          itemIsListed.quantity -= quantity;
          itemIsListed.itemTotalPrice =
            itemIsListed.quantity * itemIsListed.unitPrice;
        }
      }
    }
  }

  // Apply Discount Code to Item
  applyDiscountCode(id: number, discountCode: string): void {
    let itemIsListed = this.cartItems.find((item) => item.id == id);
    if (itemIsListed) {
      itemIsListed.discountCode = discountCode;
      itemIsListed.itemTotalPrice =
        itemIsListed.itemTotalPrice -
        itemIsListed.itemTotalPrice * (itemDiscountCodes[discountCode] / 100);
    } else {
      throw new Error("Item Not Found");
    }
  }

  // Apply Discount Code to Whole Cart
  applyCartDiscountCode(discountCode: string): number {
    let total = 0;
    const discount = cartDiscountCodes[discountCode] / 100;
    let cartTotal = this.getTotalPrice();
    total = cartTotal - cartTotal * discount;

    return Number(total.toFixed(2));
  }

  // RETURNS TOTAL ITEM PRICE
  getItemTotalPrice(id: number): number | string {
    let itemIsListed = this.cartItems.find((item) => item.id == id);
    let val = itemIsListed ? itemIsListed?.itemTotalPrice : "Item Not Found";
    return val;
  }

  // RETURNS CART TOTAL PRICE
  getTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach((itm) => {
      totalPrice += itm.itemTotalPrice;
    });
    return totalPrice;
  }

  // RETURNS THE WHOLE CART
  getCartItems(): {}[] {
    return this.cartItems;
  }
}

const myCart = new Cart();
myCart.addToCart(3346, "Book", 10, 5);
myCart.addToCart(3356, "Booksasda", 10, 5);
// myCart.addToCart(3346, "Book", 10, 4);
// myCart.removeFromCart(3346, 8);
// myCart.applyDiscountCode(3346, "DISCOUNT_10");
// myCart.applyCartDiscountCode("DISCOUNT_10");
console.log(myCart.getCartItems());
console.log(myCart.getItemTotalPrice(3346));
console.log(myCart.applyCartDiscountCode("DISCOUNT_10"));

export {};
