import { useDispatch, useSelector } from "react-redux"
import s from "./Searchnav.module.css"
import { closeSearch } from "../../../redux/actions/searchActions"
import search from "../../../assets/images/search.svg"
import close from "../../../assets/images/close.svg"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

interface FormData {
    search: string;
}

const initialValues: FormData = {
    search: '',
};

const validationSchema = Yup.object().shape({
    search: Yup.string().required(''),
});


const Searchnav = () => {

    const dispatch = useDispatch()
    const isSearch = useSelector((state) => state.searchReducer.isSearch)

    const onClickHandler = () => {
        dispatch(closeSearch())
    }

    const handleSubmit = (value: any) => {
        console.log(value)
    }

    return (
        <div>
            {isSearch
                ?
                <div className={s.search}>
                    <div className={s.inner}>
                        <div className={s.input_box}>
                            <div className={s.img}>
                                <img width="18px" height="18px" src={search} alt="" />
                            </div>
                            <div className={s.form_block}>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                    className={s.formik}
                                >
                                    {({ }) => (
                                        <Form className={s.form}>
                                            <Field
                                                placeholder="SEARCH HERE"
                                                className={s.input}
                                                type="search"
                                                name="search"
                                            />
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                        <div onClick={onClickHandler} className={s.close}>
                            <img width="15px" height="15px" src={close} alt="" />
                        </div>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default Searchnav;