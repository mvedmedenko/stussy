import s from "./Address.module.css"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { addNewUserAddress, deleteUserAddress, getUserAddresses, saveAddressChanges, setAddressAsDefault } from "../../../redux/actions/accountActions";
import { setNavigationActiveList } from "../../../redux/actions/headerActions";


interface FormData {
    firstName: string
    lastName: string
    firstAddress: string
    secondAddress: string
    city: string
    stateOrProvince: string
    postalCode: string
    country: string
    isDefault: boolean
}

const initialValues: FormData = {
    firstName: "",
    lastName: "",
    firstAddress: "",
    secondAddress: "",
    city: "",
    stateOrProvince: "ALBERTA",
    postalCode: "",
    country: "CANADA",
    isDefault: false,
};

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    firstAddress: Yup.string().required('First Address is required'),
    secondAddress: Yup.string().notRequired(),
    city: Yup.string().required('City is required'),
    stateOrProvince: Yup.string().required('State Or Province is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
});


const Address = () => {

    const dispatch = useAppDispatch()
    const [fieldFocus, setFieldFocus] = useState<string>("");
    const [isValidForm, setIsValidForm] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<FormData>(initialValues);
    const [isAddingAddress, setIsAddingAddress] = useState<boolean>(false)
    const [isEditingAddress, setIsEditingAddress] = useState<boolean>(false)
    const [formKey, setFormKey] = useState<number>(0);
    const userId = useAppSelector((state) => state.authReducer.user.uid)
    const userAddresses = useAppSelector((state) => state.accountReducer.addresses)

    useEffect(() => {
        dispatch(setNavigationActiveList("account"))
    }, [])

    useEffect(() => {
        dispatch(getUserAddresses(userId));
    }, [userId]);


    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormValues({ ...formValues, [name]: checked });
    };

    const handleFocus = (fieldName: string) => {
        setFieldFocus(fieldName)
    };

    const handleFormValidity = (isValid: boolean) => {
        setIsValidForm(isValid);
    };

    const handleBlur = (fieldName: string) => {
        setFieldFocus(fieldName);
    };


    const handleSubmit = (values: FormData) => {
        setFormValues({ ...values, isDefault: formValues.isDefault })
        const updatedAddresses = { ...values, isDefault: formValues.isDefault }
        if (userAddresses.length === 0) {
            const defaultAddresses = { ...values, isDefault: true }
            dispatch(addNewUserAddress(userId, defaultAddresses))
        } else {
            dispatch(addNewUserAddress(userId, updatedAddresses))
        }
        setFormValues(initialValues)
        setIsAddingAddress(false)
    }

    const addNewAddressHandler = () => {
        setIsAddingAddress(!isAddingAddress)
        setFormValues({ ...initialValues })
        if (isEditingAddress === true) {
            setIsAddingAddress(false)
        }
        setFormKey((prevKey) => prevKey + 1);
    }

    const discardChangesHandler = () => {
        setFormValues(initialValues)
        setFormKey((prevKey) => prevKey + 1);
    }

    const deleteUserAddressHandler = (addressToDelete: any) => {
        dispatch(deleteUserAddress(userId, addressToDelete))
        setFormValues(initialValues)
        if (isEditingAddress) {
            setIsEditingAddress(false)
        } else if (isAddingAddress) {
            setIsAddingAddress(false)
        }
        setFormKey((prevKey) => prevKey + 1);
    }

    const editAddressHandler = (editingAddress: any) => {
        setFormValues({ ...editingAddress, isDefault: false })
        setIsEditingAddress(true)
        if (isAddingAddress === true) {
            setIsAddingAddress(false)
        }
        setFormKey((prevKey) => prevKey + 1);
    }

    const saveAddressChangesHandler = (values: any) => {
        setFormValues({ ...values, isDefault: formValues.isDefault })
        const changedAddress = { ...values, isDefault: formValues.isDefault }
        dispatch(saveAddressChanges(userId, changedAddress))
        setFormValues(initialValues)
        setIsEditingAddress(false)
    }

    const setAddressAsDefaultHandler = (addressId: string) => {
        dispatch(setAddressAsDefault(userId, addressId))
    }

    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.addresses_box}>
                        <div className={s.account_details}>
                            <div>
                                <h2 className={s.title}>ADDRESSES</h2>
                            </div>
                            <div className={s.subtitle}>
                                SHIPPING INFORMATION
                            </div>
                            <div className={s.text}>
                                Below are a list of contact addresses used as shipping details during the <br /> checkout process.
                            </div>
                            <div className={s.saved_addresses}>
                                {userAddresses.length === 0 ? (
                                    <div>No Saved Addresses</div>
                                ) : (
                                    <div>
                                        {userAddresses.map((i: any, index: number) => {
                                            return <div className={s.address} key={index}>
                                                <div className={s.name_box}>
                                                    <div className={s.name}>{i.firstName + " " + i.lastName}</div>
                                                    <div className={s.manage_box}>
                                                        <div onClick={() => editAddressHandler(i)} className={s.edit_btn}>
                                                            <button>EDIT</button>
                                                        </div>
                                                        <div onClick={() => deleteUserAddressHandler(i)} className={s.delete_btn}>
                                                            <button>DELETE</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>{i.firstAddress}</div>
                                                    <div>{i.secondAddress}</div>
                                                </div>
                                                <div className={s.city}>
                                                    <span>{i.city}</span>
                                                    <span>{i.stateOrProvince}</span>
                                                    <span>{i.postalCode}</span>
                                                </div>
                                                <div className={s.country_box}>
                                                    <div>{i.country}</div>
                                                    <div className={s.default_btn}>
                                                        {i.isDefault === true
                                                            ? <div className={s.default_text}>DEFAULT</div>
                                                            : <div onClick={() => setAddressAsDefaultHandler(i.id)}><button>SET AS DEFAULT</button></div>}
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                )}
                            </div>
                            <div onClick={addNewAddressHandler} className={s.button}>
                                <button>
                                    ADD NEW ADDRESS
                                </button>
                            </div>
                        </div>
                    </div>
                    {isAddingAddress || isEditingAddress
                        ?
                        <div className={s.new_addresses_box}>
                            <div>
                                <h2 className={s.title}>NEW ADDRESS</h2>
                            </div>
                            <Formik
                                initialValues={formValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                                key={formKey}
                                validateOnChange={true}
                                validateOnBlur={true}
                                validate={(values: FormData) => {
                                    validationSchema
                                        .validate(values, { abortEarly: false })
                                        .then(() => {
                                            handleFormValidity(true);
                                        })
                                        .catch(() => {
                                            handleFormValidity(false);
                                        });
                                }}
                            >
                                {({ isSubmitting, errors, touched, values }) => (
                                    <Form className={s.form}>

                                        <div className={s.input_container}>
                                            <Field
                                                name="firstName"
                                                className={`${s.input} ${errors.firstName && touched.firstName ? s.error_border : ''}`}
                                                type="text"
                                                onFocus={() => handleFocus("firstName")}
                                                onBlur={() => handleBlur("")}
                                            />
                                            <label className={`${s.label} ${fieldFocus !== "firstName" && values.firstName.length > 0 ? s.label_animated : ''} ${fieldFocus === 'firstName' ? s.only_focus : ''}`}>FIRST NAME</label>
                                        </div>

                                        <div className={s.input_container}>
                                            <Field
                                                className={`${s.input} ${errors.lastName && touched.lastName ? s.error_border : ''}`}
                                                type="text"
                                                name="lastName"
                                                onFocus={() => handleFocus("lastName")}
                                                onBlur={() => handleBlur("")}
                                            />
                                            <label className={`${s.label} ${fieldFocus !== "lastName" && values.lastName.length > 0 ? s.label_animated : ''} ${fieldFocus === 'lastName' ? s.only_focus : ''}`}>LAST NAME</label>
                                        </div>

                                        <div className={s.input_container}>
                                            <Field
                                                className={`${s.input} ${errors.firstAddress && touched.firstAddress ? s.error_border : ''}`}
                                                type="text"
                                                name="firstAddress"
                                                onFocus={() => handleFocus("firstAddress")}
                                                onBlur={() => handleBlur("")}
                                            />
                                            <label className={`${s.label} ${fieldFocus !== "firstAddress" && values.firstAddress.length > 0 ? s.label_animated : ''} ${fieldFocus === 'firstAddress' ? s.only_focus : ''}`}>ADDRESS 1</label>
                                        </div>

                                        <div className={s.input_container}>
                                            <Field
                                                className={`${s.input} ${errors.secondAddress && touched.secondAddress ? s.error_border : ''}`}
                                                type="text"
                                                name="secondAddress"
                                                onFocus={() => handleFocus("secondAddress")}
                                                onBlur={() => handleBlur("")}
                                            />
                                            <label className={`${s.label} ${fieldFocus !== "secondAddress" && values.secondAddress.length > 0 ? s.label_animated : ''} ${fieldFocus === 'secondAddress' ? s.only_focus : ''}`}>ADDRESS 2</label>
                                        </div>

                                        <div className={s.input_container}>
                                            <Field
                                                className={`${s.input} ${errors.city && touched.city ? s.error_border : ''}`}
                                                type="text"
                                                name="city"
                                                onFocus={() => handleFocus("city")}
                                                onBlur={() => handleBlur("")}
                                            />
                                            <label className={`${s.label} ${fieldFocus !== "city" && values.city.length > 0 ? s.label_animated : ''} ${fieldFocus === 'city' ? s.only_focus : ''}`}>CITY</label>
                                        </div>

                                        <div className={s.input_container}>

                                            <div className={s.select_container}>
                                                <Field as="select" className={`${s.select} ${errors.stateOrProvince && touched.stateOrProvince ? s.error_select : ''}`} name="stateOrProvince">
                                                    <option value="ALBERTA">ALBERTA</option>
                                                    <option value="BRITISH COLUMBIA">BRITISH COLUMBIA</option>
                                                    <option value="MANITOBA">MANITOBA</option>
                                                    <option value="NEW BRUNSWICK">NEW BRUNSWICK</option>
                                                    <option value="NEWFOUNDLAND AND LABRADOR">NEWFOUNDLAND AND LABRADOR</option>
                                                    <option value="NORTHWEST TERRITORIES">NORTHWEST TERRITORIES</option>
                                                    <option value="NOVA SCOTIA">NOVA SCOTIA</option>
                                                    <option value="NUNAVUT">NUNAVUT</option>
                                                    <option value="ONTARIO">ONTARIO</option>
                                                    <option value="PRINCE EDWARD ISLAND">PRINCE EDWARD ISLAND</option>
                                                    <option value="QUEBEC">QUEBEC</option>
                                                    <option value="SASKATCHEWAN">SASKATCHEWAN</option>
                                                    <option value="YUKON">YUKON</option>
                                                </Field>
                                                <label className={s.select_label}>STATE/PROVINCE</label>
                                            </div>
                                        </div>

                                        <div className={s.input_container}>
                                            <Field
                                                className={`${s.input} ${errors.postalCode && touched.postalCode ? s.error_border : ''}`}
                                                type="text"
                                                name="postalCode"
                                                onFocus={() => handleFocus("postalCode")}
                                                onBlur={() => handleBlur("")}
                                            />
                                            <label className={`${s.label} ${fieldFocus !== "postalCode" && values.postalCode.length > 0 ? s.label_animated : ''} ${fieldFocus === 'postalCode' ? s.only_focus : ''}`}>POSTAL/ZIP CODE</label>
                                        </div>

                                        <div className={s.input_container}>
                                            <div className={s.select_container}>
                                                <Field as="select" className={`${s.select} ${errors.country && touched.country ? s.error_select : ''}`} name="country">
                                                    <option value="CANADA">CANADA</option>
                                                </Field>
                                                <label className={s.select_label}>COUNTRY</label>
                                            </div>
                                        </div>

                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="isDefault"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.isDefault}
                                            />
                                            <span className={s.checkbox}></span>
                                            SET AS DEFAULT ADDRESS
                                        </label>

                                        <div className={s.btn_box}>
                                            {isAddingAddress && <button className={s.save_btn} type="submit" disabled={!isValidForm || isSubmitting}>SAVE ADDRESS</button>}
                                            {isEditingAddress && <button onClick={() => saveAddressChangesHandler(values)} className={s.save_btn} disabled={!isValidForm}>SAVE CHANGES</button>}

                                            <button onClick={discardChangesHandler} className={s.discard_btn} type="button">
                                                DISCARD CHANGES
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default Address;