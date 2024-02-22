import s from "./Bag.module.css"
import close from "../../../assets/images/close.svg"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { closeBag, decrementFirebaseCartItem, decrementLocalStorageCartItem, incrementFirebaseCartItem, incrementLocalStorageCartItem } from "../../../redux/actions/cartActions"
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

const Bag = () => {

    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement>(null)
    const cartItems = useAppSelector((state) => state.cartReducer.items)
    const isAuth = useAppSelector((state) => state.authReducer.isAuth)
    const userId = useAppSelector((state) => state.authReducer.user.uid)
    const isRequesting = useAppSelector((state) => state.cartReducer.isRequesting)
    const [subtotalPrice, setSubtotalPrice] = useState<any>(0)
    const objectsArray = Object.values(cartItems);

    useEffect(() => {
        const countSubtotal = () => {
            const totalPrice = objectsArray.reduce((acc: number, item: any) => {
                const sum = item.price * item.amount;
                return acc + sum;
            }, 0);
            setSubtotalPrice(totalPrice);
        };

        countSubtotal()
    }, [subtotalPrice, objectsArray])

    const closeHandler = () => {
        dispatch(closeBag())
    }

    const continueShippingHandler = () => {
        dispatch(closeBag())
    }

    const onBagListener = (e: React.MouseEvent<HTMLDivElement>) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            dispatch(closeBag());
        }
    };
    

    const incrementHandler = (itemId: string, itemSize: string) => {
        if (isAuth) {
            dispatch(incrementFirebaseCartItem(userId, itemId, itemSize))
        } else {
            dispatch(incrementLocalStorageCartItem(itemId, itemSize))
        }
    }

    const decrementHandler = (itemId: string, itemSize: string) => {
        if(isAuth) {
            dispatch(decrementFirebaseCartItem(userId, itemId, itemSize))
        } else {
            dispatch(decrementLocalStorageCartItem(itemId, itemSize))
        }
    }

    return (
        <div onClick={onBagListener} className={s.bag}>
            <div ref={ref} className={s.inner}>
                <div className={s.title_box}>
                    <div className={s.title}>
                        <p>SHIPPING BAG</p>
                    </div>
                    <div className={s.close} onClick={closeHandler}>
                        <img width="15px" height="15px" src={close} alt="X" />
                    </div>
                </div>
                <div className={s.items_box}>
                    {objectsArray.map((item: any) => {
                        return <div key={item.id} className={isRequesting ? s.item_disabled : s.item}>
                            <div className={s.img}>
                                <img width="175px" height="218px" src={item.firstImg} alt="" />
                            </div>
                            <div className={s.info_box}>
                                <div className={s.title_item}>
                                    {item.title}
                                </div>
                                <div className={s.color}>
                                    {item.color} / {item.size}
                                </div>
                                <div className={s.price}>
                                    $ {item.price}
                                </div>
                                <div className={s.amount_box}>
                                    <button disabled={isRequesting} onClick={() => decrementHandler(item.id, item.size)} className={s.decrement}>-</button>
                                    <div className={s.amount}>{item.amount}</div>
                                    <button disabled={isRequesting} onClick={() => incrementHandler(item.id, item.size)} className={s.increment}>+</button>
                                </div>
                            </div>
                        </div>
                    })}
                    <div className={s.shipping_info}>
                        <div className={cartItems.length > 0 ? s.taxes_info : s.taxes_empty_cart}>
                            <div className={s.taxes_inner}>
                                {cartItems.length > 0 
                                ?
                                <p>TAXES AND SHIPPING CALCULATED AT CHECKOUT.</p>
                                :
                                <p>YOU HAVE NO ITEMS IN YOUR SHOPPING BAG.</p>
                            }
                                <p>FREE SHIPPING IN CANADA ON ORDERS OVER CA$200.</p>
                            </div>
                        </div>
                        {cartItems.length > 0
                            ?
                            <div className={s.subtotal_box}>
                                <div className={s.subtotal_inner}>
                                    <div>SUBTOTAL</div>
                                    <div>${subtotalPrice}</div>
                                </div>
                            </div>
                            :
                            null

                        }
                    </div>
                </div>
                <div className={s.button_box}>
                    <div className={cartItems.length! > 0 ? s.continue_btn_box : s.continue_btn_black_box}>
                        <button onClick={continueShippingHandler} className={cartItems.length! > 0 ? s.continue_btn : s.continue_btn_black}>CONTINUE SHOPPING</button>
                    </div>
                    {cartItems.length > 0
                        ?
                        <div className={s.checkout_btn}> 
                            <NavLink to="/checkout"><button>CHECKOUT</button></NavLink>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Bag;