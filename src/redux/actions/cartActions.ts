import { child, get, push, update, set, remove } from 'firebase/database';
import { database } from '../../lib/firebase/firebase';
import { ref } from "firebase/database";

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

export const clearStoreCartAction = () => ({
  type: 'CLEAR_STORE_CART',
});

export const setCartDataFromLocalStorage = (data: any) => ({
  type: 'SET_CART_FROM_LOCAL_STORAGE',
  payload: data,
})

export const startRequestingStatusAction = () => ({
  type: 'START_REQUESTING_STATUS',
})

export const stopRequestingStatusAction = () => ({
  type: 'STOP_REQUESTING_STATUS',
})




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
  dispatch(getLocalStorageCart())
}


export const addToFirebaseCart = (selectedSize: string, newObj: any, userId: string) => async (dispatch: any) => {
  try {
    dispatch(startRequestingStatusAction())
    const cartRef = ref(database, `carts/${userId}`);
    const cartSnapshot = await get(child(cartRef, 'items'));

    const cartData = cartSnapshot.val() || {};

    const newItem = { size: selectedSize, amount: 1, ...newObj };

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
    const getUpdatedFirebaseCart = dispatch(getFirebaseCart(userId))
    console.log(getUpdatedFirebaseCart)
    // dispatch(setCartDataAction(getUpdatedFirebaseCart))
    dispatch(stopRequestingStatusAction())


  } catch (error) {
    console.error('Error adding product to Firebase cart:', error);
  }
}

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
      dispatch(clearStoreCartAction())
      console.log('Data is not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export const incrementFirebaseCartItem = (userId: string, itemId: string, itemSize: string) => async (dispatch: any) => {
  try {
    dispatch(startRequestingStatusAction())
    const cartItemRef = ref(database, `carts/${userId}/items`);
    const cartItemSnapshot = await get(cartItemRef);
    const currentAmount = cartItemSnapshot.val();

    if (currentAmount !== null) {
      const itemKeys = Object.keys(currentAmount);

      const itemToUpdateKey = itemKeys.find(key => currentAmount[key].id === itemId && currentAmount[key].size === itemSize);

      if (itemToUpdateKey) {
        const itemToUpdateRef = ref(database, `carts/${userId}/items/${itemToUpdateKey}/amount`);
        const currentItemAmount = currentAmount[itemToUpdateKey].amount || 0;

        await set(itemToUpdateRef, currentItemAmount + 1);
        dispatch(getFirebaseCart(userId));
        console.log('Item found in Firebase cart. Incrementing amount.');
      } else {
        console.log('Item not found in Firebase cart.');
      }
      dispatch(stopRequestingStatusAction())
    }
  } catch (error) {
    console.error('Error incrementing item amount in Firebase cart:', error);
  }
};

export const decrementFirebaseCartItem = (userId: string, itemId: string, itemSize: string) => async (dispatch: any) => {
  try {
    dispatch(startRequestingStatusAction())
    const cartItemRef = ref(database, `carts/${userId}/items`);
    const cartItemSnapshot = await get(cartItemRef);
    const currentAmount = cartItemSnapshot.val();
    console.log(currentAmount);
    console.log(itemId);

    if (currentAmount !== null) {
      const itemKeys = Object.keys(currentAmount);

      const itemToUpdateKey = itemKeys.find(key => currentAmount[key].id === itemId && currentAmount[key].size === itemSize);

      if (itemToUpdateKey) {
        const itemToUpdateRef = ref(database, `carts/${userId}/items/${itemToUpdateKey}`);
        const currentItemAmount = currentAmount[itemToUpdateKey].amount || 0;

        if (currentItemAmount > 1) {
          await set(itemToUpdateRef, { ...currentAmount[itemToUpdateKey], amount: currentItemAmount - 1 });
          dispatch(getFirebaseCart(userId));
          console.log('Item found in Firebase cart. Decrementing amount.');
        } else {
          await remove(itemToUpdateRef);
          dispatch(getFirebaseCart(userId));
          console.log('Item amount is less than 1. Removing item from Firebase cart.');
        }
      } else {
        console.log('Item not found in Firebase cart.');
      }
      dispatch(stopRequestingStatusAction())
    }
  } catch (error) {
    console.error('Error decrementing item amount in Firebase cart:', error);
  }
};

export const getLocalStorageCart = () => (dispatch: any) => {
  let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  dispatch(setCartDataFromLocalStorage(existingCart))
}

export const incrementLocalStorageCartItem = (itemId: string, itemSize: string) => (dispatch: any) => {
  let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = existingCart.find((i) => i.id === itemId && i.size === itemSize);

  if (existingItem) {
    existingItem.amount += 1;
    localStorage.setItem("cart", JSON.stringify(existingCart));
    dispatch(getLocalStorageCart());
  }
};

export const decrementLocalStorageCartItem = (itemId: string, itemSize: string) => (dispatch: any) => {
  let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = existingCart.find((i) => i.id === itemId && i.size === itemSize);

  if (existingItem) {
    if(existingItem.amount > 1) {
      existingItem.amount -= 1;
      localStorage.setItem("cart", JSON.stringify(existingCart));
      dispatch(getLocalStorageCart());
    } else {
      const filteredCart = existingCart.filter((i) => i !== existingItem)
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      dispatch(getLocalStorageCart());
    }
  }
};






