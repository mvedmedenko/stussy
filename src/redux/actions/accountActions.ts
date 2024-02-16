import { database } from "../../lib/firebase/firebase"
import { ref, push, get, remove, set, update } from "firebase/database";
import { addressData } from "../../types/types";

const getUserAddressesSuccessAction = (addresses: any[]) => ({
    type: "GET_USER_ADDRESSES_SUCCESS",
    payload: addresses,
});

const getUserAddressesFailureAction = (error: any) => ({
    type: "GET_USER_ADDRESSES_FAILURE",
    payload: error,
});

export const addNewUserAddressSuccessAction = (addresses: any) => ({
    type: 'UPDATE_USER_ADDRESSES_SUCCESS',
    payload: addresses,
});

export const addNewUserAddressFailureAction = (error: any) => ({
    type: 'UPDATE_USER_ADDRESSES_FAILURE',
    payload: error,
});

const deleteUserAddressSuccessAction = (addressToDeleteInfo: any) => ({
    type: "DELETE_USER_ADDRESS_SUCCESS",
    payload: addressToDeleteInfo,
});

const deleteUserAddressFailureAction = (error: any) => ({
    type: "DELETE_USER_ADDRESS_FAILURE",
    payload: error,
});

export const saveAddressChangesSuccessAction = (updatedAddress: any) => ({
    type: 'SAVE_ADDRESS_CHANGES_SUCCESS',
    payload: updatedAddress,
});

export const saveAddressChangesFailureAction = (error: any) => ({
    type: 'SAVE_ADDRESS_CHANGES_FAILURE',
    payload: error,
});

export const setAddressAsDefaultSuccessAction = (shouldChangeAddresId: string, newDefaultAddressId: string) => ({
    type: 'SET_ADDRESS_AS_DEFAULT_SUCCESS',
    shouldChangeAddresId: shouldChangeAddresId,
    newDefaultAddressId: newDefaultAddressId,
    
});

export const setAddressAsDefaultFailureAction = (error: any) => ({
    type: 'SET_ADDRESS_AS_DEFAULT_FAILURE',
    payload: error,
});

export const updateIsDefaultSuccessAction = (idChangedItem: string) => ({
    type: "UPDATE_IS_DEFAULT_SUCCESS",
    payload: idChangedItem,
});
export const changeIsDefaultIfAlreadyHasAction = (idItem: string) => ({
    type: "CHANGE_IS_DEFAULT_IF_ALREADY_HAS",
    payload: idItem,
});




export const addNewUserAddress = (userId: string, newAddress: any) => async (dispatch: any) => {
    try {
        const addressesRef = ref(database, `addresses/${userId}/items`);
        const addressesSnapshot = await get(addressesRef);
        const addressesData = addressesSnapshot.val() || {};

        const existingAddress = Object.values(addressesData).find((address: any) => {
            return (
                address.firstAddress === newAddress.firstAddress &&
                address.secondAddress === newAddress.secondAddress
            );
        });

        if (existingAddress) {
            console.log("Address already exists");
            return null;
        } else {

            if (newAddress.isDefault === true) {
                const existingAddressDefaultTrue = Object.values(addressesData).find((address: any) => {
                    return (
                        (address as addressData).isDefault === true
                    )
                }) as addressData | undefined;

                if (existingAddressDefaultTrue) {
                    const addressToUpdateRef = ref(database, `addresses/${userId}/items/${existingAddressDefaultTrue.id}`);
                    await update(addressToUpdateRef, { isDefault: false });
                    console.log('Address updated in Firebase');
                    dispatch(changeIsDefaultIfAlreadyHasAction(existingAddressDefaultTrue.id));


                    const newAddressRef = push(addressesRef);
                    const newAddressKey = newAddressRef.key;

                    const addressWithId = { ...newAddress, id: newAddressKey };

                    await set(newAddressRef, addressWithId);
                    dispatch(addNewUserAddressSuccessAction(addressWithId));
                    console.log('Address added to Firebase');

                } else {
                    const newAddressRef = push(addressesRef);
                    const newAddressKey = newAddressRef.key;

                    const addressWithId = { ...newAddress, id: newAddressKey };

                    await set(newAddressRef, addressWithId);
                    dispatch(addNewUserAddressSuccessAction(addressWithId));
                    console.log('Address added to Firebase');
                }

            } else {
                const newAddressRef = push(addressesRef);
                const newAddressKey = newAddressRef.key;

                const addressWithId = { ...newAddress, id: newAddressKey };

                await set(newAddressRef, addressWithId);
                dispatch(addNewUserAddressSuccessAction(addressWithId));
                console.log('Address added to Firebase');
            }

        }

    } catch (error) {
        console.error('Error adding address to Firebase:', error);
        dispatch(addNewUserAddressFailureAction(error));
    }
};

export const getUserAddresses = (userId: string) => async (dispatch: any) => {
    try {
        const addressesRef = ref(database, `addresses/${userId}/items`);
        const addressesSnapshot = await get(addressesRef);
        const addressesData = addressesSnapshot.val() || {};

        const addressesArray = Object.values(addressesData);

        console.log('Addresses retrieved from Firebase:', addressesArray);

        dispatch(getUserAddressesSuccessAction(addressesArray));
    } catch (error) {
        console.error('Error fetching user addresses from Firebase:', error);
        dispatch(getUserAddressesFailureAction(error));
    }
};

export const deleteUserAddress = (userId: string, addressToDelete: addressData) => async (dispatch: any) => {
    try {
        const addressesRef = ref(database, `addresses/${userId}/items`);
        const addressesSnapshot = await get(addressesRef);
        const addressesData = addressesSnapshot.val() || {};

        const addressesArray = Object.values(addressesData) as addressData[];
        const addressIndexToDelete = addressesArray.findIndex((address: addressData) => {
            return (
                address.firstAddress === addressToDelete.firstAddress &&
                address.secondAddress === addressToDelete.secondAddress
            );
        });

        if (addressIndexToDelete !== -1) {
            const addressKeyToDelete = Object.keys(addressesData)[addressIndexToDelete];
            const addressToDeleteRef = ref(database, `addresses/${userId}/items/${addressKeyToDelete}`);
            const isDefaultToDelete = addressesArray[addressIndexToDelete].isDefault;

            const addressToDeleteInfo = addressesArray[addressIndexToDelete];

            await remove(addressToDeleteRef);
            console.log('Address deleted from Firebase');
            dispatch(deleteUserAddressSuccessAction(addressToDeleteInfo))

            if (isDefaultToDelete && addressesArray.length > 1) {
                const nextAddressIndex = addressIndexToDelete === 0 ? 1 : 0;
                const nextAddressKey = Object.keys(addressesData)[nextAddressIndex];
                const nextAddressRef = ref(database, `addresses/${userId}/items/${nextAddressKey}`);

                await update(nextAddressRef, { ...addressesArray[nextAddressIndex], isDefault: true });
                console.log('Next address set as default');
                dispatch(updateIsDefaultSuccessAction(nextAddressKey));
            }

            dispatch(deleteUserAddressSuccessAction(addressToDeleteInfo));
        } else {
            console.log('Address not found in Firebase');
        }
    } catch (error) {
        console.error('Error deleting address from Firebase:', error);
        dispatch(deleteUserAddressFailureAction(error));
    }
};




export const saveAddressChanges = (userId: string, updatedAddress: any) => async (dispatch: any) => {
    try {
        const addressesRef = ref(database, `addresses/${userId}/items`);
        const addressesSnapshot = await get(addressesRef);
        const addressesData = addressesSnapshot.val() || {};

        const existingAddressId = Object.keys(addressesData).find((addressId: string) => {
            return addressesData[addressId].id === updatedAddress.id;
        });

        if (existingAddressId) {
            const addressToUpdateRef = ref(database, `addresses/${userId}/items/${existingAddressId}`);
            await update(addressToUpdateRef, updatedAddress);
            console.log('Address updated in Firebase');
            dispatch(saveAddressChangesSuccessAction(updatedAddress));
        } else {
            console.log('Address not found in Firebase');
            dispatch(saveAddressChangesFailureAction('Address not found'));
        }
    } catch (error) {
        console.error('Error updating address in Firebase:', error);
        dispatch(saveAddressChangesFailureAction(error));
    }
};

export const setAddressAsDefault = (userId: string, addressId: string) => async (dispatch: any) => {
    try {
        const addressesRef = ref(database, `addresses/${userId}/items`);
        const addressesSnapshot = await get(addressesRef);
        const addressesData = addressesSnapshot.val() || {};

        const existingAddressDefaultTrue = Object.values(addressesData).find((address: any) => {
            return (
                (address as addressData).isDefault === true
            )
        }) as addressData | undefined;

        if(existingAddressDefaultTrue) {
            const addressToUpdateRef = ref(database, `addresses/${userId}/items/${existingAddressDefaultTrue.id}`);
            await update(addressToUpdateRef, { isDefault: false });
            console.log('Address updated in Firebase');

            const newAddressToUpdateRef = ref(database, `addresses/${userId}/items/${addressId}`);
            await update(newAddressToUpdateRef, { isDefault: true });
            console.log('Address updated in Firebase');
            dispatch(setAddressAsDefaultSuccessAction(existingAddressDefaultTrue.id, addressId));
        } else {
            console.log('Existing default address not found');
        }
    } catch (error) {
        console.error('Error setting address as default:', error);
        dispatch(setAddressAsDefaultFailureAction(error));
    }
};





