import { child, get, push, update } from 'firebase/database';
import { database } from '../../lib/firebase/firebase';
import { ref } from "firebase/database";

export const setSelectedSizeAction = (size: string) => ({
  type: 'SET_SELECTED_SIZE',
  payload: size,
});

export const openBagAction = () => ({
  type: 'OPEN_BAG',
});

export const closeBagAction = () => ({
  type: 'CLOSE_BAG',
});

export const setCartDataAction = (data: any) => ({
  type: 'SET_CART_DATA_FROM_FIREBASE',
  payload: data,
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

    const cartData = cartSnapshot.val() || {};

    const newItem = {size: selectedSize, amount: 1, ...newObj };

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

export const openBag = () => async (dispatch: any) => {
  dispatch(openBagAction())
}

export const closeBag = () => async (dispatch: any) => {
  dispatch(closeBagAction())
}


export const getFirebaseCart = (userId: string) => async (dispatch: any) => {
  try {
    const cartsRef = ref(database, `carts/${userId}`);

    const snapshot = await get(cartsRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const objectsArray = Object.values(data.items);
      dispatch(setCartDataAction(objectsArray))
    } else {
      console.log('Data is not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};




