import { useEffect, useRef } from "react"
import { closeFilter } from "../../../../../redux/actions/filterActions"
import s from "./Filter.module.css"
import { useAppDispatch } from "../../../../../hooks/hooks"
import { useState } from "react"
import { Formik, Field, Form } from 'formik';

interface FormData {
    S: boolean;
    M: boolean
    L: boolean
    XL: boolean
    XLL: boolean
    BLACK: boolean
    BLUE: boolean
    BROWN: boolean
    GREEN: boolean
    GREY: boolean
    NATURAL: boolean
    PINK: boolean
    ACCESSORIES: boolean
    HEADWEAR: boolean
    KNITS: boolean
    OUTERWEAR: boolean
    PANTS: boolean
    SHORTS: boolean
    SWEATS: boolean

}

const initialValues: FormData = {
    S: false,
    M: false,
    L: false,
    XL: false,
    XLL: false,
    BLACK: false,
    BLUE: false,
    BROWN: false,
    GREEN: false,
    GREY: false,
    NATURAL: false,
    PINK: false,
    ACCESSORIES: false,
    HEADWEAR: false,
    KNITS: false,
    OUTERWEAR: false,
    PANTS: false,
    SHORTS: false,
    SWEATS: false,
};



const Filter = () => {

    const dispatch = useAppDispatch()
    const ref = useRef(null)
    const [formValues, setFormValues] = useState<FormData>(initialValues);

    useEffect(() => {
        console.log(formValues)
    }, [formValues])

    const handleClear = () => {
        setFormValues(initialValues);
    };    

    const closeHandle: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === ref.current) {
            dispatch(closeFilter())
        }
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormValues({ ...formValues, [name]: checked });

        const labelElement = e.target.closest('label');
        if (labelElement) {
            const categorySpan = labelElement?.querySelector('span:last-of-type');
            if (categorySpan && categorySpan instanceof HTMLSpanElement) {
                categorySpan.style.opacity = checked ? '1' : '0.5';
            }
        }
    };

    const handleFilter = (values: FormData) => {
        console.log(values)
    }

    const applyHandler = () => {
        dispatch(closeFilter())
    }

    return (
        <div ref={ref} onClick={closeHandle} className={s.filter}>
            <div className={s.not_working}>FILTER IS NOT WORKING</div>
            <div className={s.filter_box}>
                <div className={s.category}>
                    <div className={s.title}>CATEGORY</div>
                    <Formik
                            initialValues={initialValues}
                            onSubmit={handleFilter}
                            validateOnChange={true}
                            validateOnBlur={true}
                        >
                            {({ }) => (
                                <Form className={s.form}>
                                    <div className={s.grid_container}>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="ACCESSORIES"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.ACCESSORIES}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>ACCESSORIES</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="HEADWEAR"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.HEADWEAR}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>HEADWEAR</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="KNITS"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.KNITS}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>KNITS</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="OUTERWEAR"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.OUTERWEAR}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>OUTERWEAR</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="PANTS"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.PANTS}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>PANTS</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="SHORTS"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.SHORTS}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>SHORTS</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="SWEATS"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.SWEATS}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>SWEATS</span>
                                        </label>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                </div>
                <div className={s.size}>
                    <div className={s.title}>SIZE</div>
                    <div>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleFilter}
                            validateOnChange={true}
                            validateOnBlur={true}
                        >
                            {({ }) => (
                                <Form className={s.form}>
                                    <div className={s.grid_container}>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="S"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.S}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>S</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="M"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.M}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>M</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="L"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.L}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>L</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="XL"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.XL}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>XL</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="XLL"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.XLL}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>XLL</span>
                                        </label>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className={s.color}>
                    <div className={s.title}>COLOR</div>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleFilter}
                            validateOnChange={true}
                            validateOnBlur={true}
                        >
                            {({ }) => (
                                <Form className={s.form}>
                                    <div className={s.grid_container}>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="BLACK"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.BLACK}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>BLACK</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="BLUE"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.BLUE}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>BLUE</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="BROWN"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.BROWN}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>BROWN</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="GREEN"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.GREEN}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>GREEN</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="GREY"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.GREY}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>GREY</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="NATURAL"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.NATURAL}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>NATURAL</span>
                                        </label>
                                        <label className={s.checkbox_label}>
                                            <Field
                                                type="checkbox"
                                                name="PINK"
                                                onChange={handleCheckboxChange}
                                                checked={formValues.PINK}
                                            />
                                            <span className={s.checkbox}></span>
                                            <span className={s.input_name}>PINK</span>
                                        </label>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                </div>
                <div className={s.button_box}>
                    <div onClick={handleClear} className={s.clear_btn}>
                        <button>CLEAR</button>
                    </div>
                    <div onClick={applyHandler} className={s.apply_btn}>
                        <button>APPLY FILTERS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;