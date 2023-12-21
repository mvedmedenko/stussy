import { ref, child, get, push, update } from 'firebase/database';
import { database } from '../../lib/firebase/firebase'; // Подключите вашу конфигурацию Firebase


export const setSelectedSizeAction = (size: string) => ({
  type: 'SET_SELECTED_SIZE',
  payload: size,
});


export const setSelectedSize = (size: string) => async (dispatch: any) => {
  dispatch(setSelectedSizeAction(size))
};

export const addToLocalStorageCart = (selectedSize: string, newObj: any) => async (dispatch: any) => {
  let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const newItem = { size: selectedSize, amount: 1, ...newObj };
  const existingItemIndex = existingCart.findIndex((item: any) => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    const existingItem = existingCart[existingItemIndex];
    if (existingItem.size === newItem.size) {
      existingItem.amount += 1;
    } else {
      existingCart.push(newItem);
    }
  } else {
    existingCart.push(newItem);
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
  console.log(JSON.parse(localStorage.getItem("cart")));
}


export const addToFirebaseCart = async (selectedSize: string, newObj: any, userId: string) => {
  try {
    const cartRef = ref(database, `carts/${userId}`);
    const cartSnapshot = await get(child(cartRef, 'items'));

    // Get data of the cart from Firebase
    const cartData = cartSnapshot.val() || {};

    const newItem = { userId: userId, size: selectedSize, amount: 1, ...newObj };

    // Check if the item with the same product ID and size already exists in the cart
    const existingItemKey = Object.keys(cartData).find(
      (key) => cartData[key].productId === newItem.productId && cartData[key].size === newItem.size
    );

    if (existingItemKey) {
      cartData[existingItemKey].amount += 1;
      await update(child(cartRef, `items/${existingItemKey}`), { amount: cartData[existingItemKey].amount });
    } else {
      await push(child(cartRef, 'items'), newItem);
    }

    console.log('Product added to Firebase cart.');
  } catch (error) {
    console.error('Error adding product to Firebase cart:', error);
  }
};




