import s from "./Product.module.css"
import arrow from "../../assets/images/arrow.svg"
import { useState } from "react";
import { openChat, closeChat } from "../../redux/actions/chatActions";
import { addToLocalStorageCart } from "../../redux/actions/cartActions";
import { setSelectedSize, getSelectedItem } from "../../redux/actions/shopActions";
import { useEffect } from "react";
import { addToFirebaseCart } from "../../redux/actions/cartActions";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Product = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.authReducer.isAuth)
    const isChat = useAppSelector((state) => state.chatReducer.isChat)
    const userId = useAppSelector((state) => state.authReducer.user.uid)
    const selectedItem = useAppSelector((state) => state.shopReducer.selectedItem)
    const selectedSize = useAppSelector((state) => state.shopReducer.selectedSize)
    const [isSelectedSizeEmpty, setIsSelectedSizeEmpty] = useState<boolean | null>(null)
    const [open, setOpen] = useState<string>("")

    useEffect(() => {
        dispatch(getSelectedItem());
    }, []);

    useEffect(() => {
        if (selectedSize.trim().length > 0) {
            setIsSelectedSizeEmpty(false);
        }
    }, [selectedSize]);

    const openChatHandle = () => {
        if (isChat) {
            dispatch(closeChat())
        } else {
            dispatch(openChat())
        }
    }

    const setSelectedSizeHandle = (e: React.MouseEvent<HTMLLIElement>) => {
        const size = e.currentTarget.innerText;
        dispatch(setSelectedSize(size))
    }

    const addToBagHandle = () => {
        if (selectedSize.trim().length === 0) {
            setIsSelectedSizeEmpty(true)
        } else if (selectedSize.trim().length > 0) {
            const { sizes, ...newObj } = selectedItem;

            if (isAuth) {
                dispatch(addToFirebaseCart(selectedSize, newObj, userId))
            } else {
                dispatch(addToLocalStorageCart(selectedSize, newObj))
            }
        };
    }

    return (
        <div className={s.product}>
            <div className="container_images">
                <div className={s.grid_container}>
                    <div className={s.img_container}>
                        {selectedItem.images.map((i: any, index: number) => {
                            return <div className={s.img_box} key={index}>
                                <img src={i} alt="img" />
                            </div>
                        })}
                    </div>
                    <div className={s.info_box}>
                        <div className={s.info_fix}>
                            <div className={s.grid_info}>
                                <div className={s.info_inner}>
                                    <div className={s.title}>
                                        <h2>
                                            {selectedItem.title}
                                        </h2>
                                    </div>
                                    <div className={s.price}>
                                        ${selectedItem.price}
                                    </div>
                                    <div className={s.color}>
                                        {selectedItem.color}
                                    </div>
                                    <div className={s.sizes}>
                                        <ul className={s.size_list}>
                                            {selectedItem.sizes.map((i: any, index: number) => {
                                                return <li
                                                    onClick={setSelectedSizeHandle}
                                                    className={i === selectedSize ? s.selected_size : ''}
                                                    key={index}
                                                >
                                                    {i}
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className={s.free_shipping}>
                                        Free shipping in Canada on orders over CA$200.
                                    </div>
                                    <div className={s.questions_box}>
                                        <div className={s.dropdown}
                                            onClick={() => setOpen(open === "details" ? "" : "details")}
                                        >
                                            <div className={s.subtitle_box}>
                                                <h3 className={s.dropdown_title}>DETAILS</h3>
                                                <span>
                                                    <img
                                                        width="7px"
                                                        height="8px"
                                                        src={arrow}
                                                        alt="arrow"
                                                        className={open === "details" ? s.arrow_active : s.arrow}
                                                    />
                                                </span>
                                            </div>
                                            {open === "details"
                                                ? <p className={s.text}>
                                                    <div className={s.details_first}>
                                                        {selectedItem.details[0]}
                                                    </div>
                                                    <div>
                                                        <ul className={s.details_list}>
                                                            {selectedItem.details.map((i: any, index: number) => {
                                                                if (index !== 0) {
                                                                    return <li className={s.details_item} key={index}>{i}</li>;
                                                                }
                                                                return null;
                                                            })}
                                                        </ul>
                                                    </div>
                                                </p>
                                                : null}
                                        </div>
                                    </div>
                                    <div className={s.questions_box}>
                                        <div className={s.dropdown}
                                            onClick={() => setOpen(open === "size-guide" ? "" : "size-guide")}
                                        >
                                            <div className={s.subtitle_box}>
                                                <h3 className={s.dropdown_title}>SIZE GUIDE</h3>
                                                <span>
                                                    <img
                                                        width="7px"
                                                        height="8px"
                                                        src={arrow}
                                                        alt="arrow"
                                                        className={open === "size-guide" ? s.arrow_active : s.arrow}
                                                    />
                                                </span>
                                            </div>
                                            {open === "size-guide"
                                                ? <p className={s.size_text}>Here should be a size guide.</p>
                                                : null}
                                        </div>
                                    </div>
                                    <div className={s.questions_box}>
                                        <div className={s.dropdown}
                                            onClick={() => setOpen(open === "shipping" ? "" : "shipping")}
                                        >
                                            <div className={s.subtitle_box}>
                                                <h3 className={s.dropdown_title}>SHIPPING</h3>
                                                <span>
                                                    <img
                                                        width="7px"
                                                        height="8px"
                                                        src={arrow}
                                                        alt="arrow"
                                                        className={open === "shipping" ? s.arrow_active : s.arrow}
                                                    />
                                                </span>
                                            </div>
                                            {open === "shipping"
                                                ? <p className={s.shipping_text}>DHL Express CA$25.</p>
                                                : null}
                                        </div>
                                    </div>
                                    <div className={s.questions_box}>
                                        <div className={s.dropdown}
                                            onClick={openChatHandle}
                                        >
                                            <div className={s.subtitle_box}>
                                                <h3 className={s.dropdown_title}>{isChat ? "CLOSE" : "CHAT"}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.button_box}>
                                <div onClick={addToBagHandle} className={s.add_button}>
                                    <button>{isSelectedSizeEmpty ? "SELECT A SIZE" : "ADD TO BAG"}</button>
                                </div>
                                <div className={s.checkout_button}>
                                    <NavLink to="/checkout"><button>CHECKOUT</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;