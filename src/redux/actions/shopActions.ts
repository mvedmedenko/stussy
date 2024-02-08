import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";


export const setProductsAction = (products: any) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });

  export const startGetProductsAction = () => ({
    type: 'GET_PRODUCTS_START',
  });

  export const getProductsSuccessAction = () => ({
    type: 'GET_PRODUCTS_SUCCESS',
  });

  export const getProductsDataFailure = (error: string) => ({
    type: 'GET_PRODUCTS_FAILURE',
    payload: error,
  });

  export const setSelectedSizeAction = (size: string) => ({
    type: 'SET_SELECTED_SIZE',
    payload: size,
  });

  export const getSelectedItemAction = (item: any) => ({
    type: 'GET_SELECTED_ITEM',
    payload: item,
  });
  export const setSelectedItemAction = (item: any) => ({
    type: 'SET_SELECTED_ITEM',
    payload: item,
  });
  

  export const setSelectedSize = (size: string) => async (dispatch: any) => {
    dispatch(setSelectedSizeAction(size))
  };

  export const setSelectedItem = (item) => async (dispatch: any) => {
    const itemString = JSON.stringify(item)
    sessionStorage.setItem("selectedItem", itemString)
    dispatch(setSelectedItemAction(item))
  };


  export const getProducts = () => async (dispatch: any) => {
    try {
      dispatch(startGetProductsAction());
      const collectionRef = collection(db, 'products');
      const querySnapshot = await getDocs(collectionRef);
      const products: any = [];
      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        const productId = doc.id;
        products.push({ ...productData, id: productId });
      });
      dispatch(setProductsAction(products));
      dispatch(getProductsSuccessAction());
    } catch (error: any) {
      dispatch(getProductsDataFailure(error.message));
    }
  };

  export const getSelectedItem = () => async (dispatch: any) => {
    const stringItem = sessionStorage.getItem("selectedItem")
    const item = JSON.parse(stringItem)
    console.log("works in actions")
    dispatch(setSelectedItem(item))
  }
