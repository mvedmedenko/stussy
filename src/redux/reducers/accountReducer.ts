import { addressData } from "../../types/types";


interface State {
    addresses: addressData[];
    error: null | string;
}

const initialState: State = {
    addresses: [],
    error: null,
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_USER_ADDRESSES_SUCCESS":
            return {
                ...state,
                addresses: action.payload,
                error: null,
            };
        case "GET_USER_ADDRESSES_FAILURE":
        case "UPDATE_USER_ADDRESSES_FAILURE":
        case "DELETE_USER_ADDRESS_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "UPDATE_USER_ADDRESSES_SUCCESS":
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
                error: null,
            };

        case 'DELETE_USER_ADDRESS_SUCCESS':
            return {
                ...state,
                addresses: state.addresses.filter((address) => address.id !== action.payload.id),
                error: null,
            };



        case "SAVE_ADDRESS_CHANGES_SUCCESS":
            const updateAddresses = state.addresses.filter((address) => {
                return address.id !== action.payload.id
            });
            return {
                ...state,
                addresses: [action.payload, ...updateAddresses],
                error: null,
            };
        case "SAVE_ADDRESS_CHANGES_FAILURE":
            return {
                ...state,
                updatedAddress: null,
                error: action.payload,
            };

            case 'SET_ADDRESS_AS_DEFAULT_SUCCESS':
                const changedAddresses = state.addresses.map((i) => {
                    if (action.shouldChangeAddresId !== undefined) {
                        if (i.id === action.shouldChangeAddresId) {
                            return { ...i, isDefault: false };
                        } else if (i.id === action.newDefaultAddressId) {
                            return { ...i, isDefault: true };
                        } else {
                            return i;
                        }
                    } else {
                        return i;
                    }
                });
            
                return {
                    ...state,
                    addresses: [...changedAddresses],
                };
            

        case 'SET_ADDRESS_AS_DEFAULT_FAILURE':
            return {
                ...state,
                error: action.payload,
            };


        case 'UPDATE_IS_DEFAULT_SUCCESS':
            const changedItemIndex = state.addresses.findIndex(item => item.id === action.payload);
            if (changedItemIndex !== -1) {
                const updatedAddresses = state.addresses.map((item, index) =>
                    index === changedItemIndex ? { ...item, isDefault: true } : item
                );

                return {
                    ...state,
                    addresses: updatedAddresses,
                };
            } else {
                return state;
            }

        case 'CHANGE_IS_DEFAULT_IF_ALREADY_HAS':
            const findItem = state.addresses.find((i) => i.id === action.payload);

            const updatedAddresses = state.addresses.map((i) => {
                if (i.id === action.payload) {
                    return { ...findItem, isDefault: false };
                }
                return i;
            });

            console.log("works");

            return {
                ...state,
                addresses: updatedAddresses,
            };
        default:
            return state;
    }
};

export default userReducer;
