import createItem from './services/item.js';
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem(1, "hotwheels ferrari", 20.99, 1);
const item2 = await createItem(2, "hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item1.id);
// await cartService.deleteItem(myCart, item2.id);

// await cartService.decreaseItem(myCart, item2);
// await cartService.decreaseItem(myCart, item2);
// await cartService.decreaseItem(myCart, item2);

await cartService.increaseItem(myCart, item1);

await cartService.displayCart(myCart);