import s from "./Bag.module.css"
import close from "../../../assets/images/close.svg"
import { useDispatch, useSelector } from "react-redux"
import { closeBag } from "../../../redux/actions/cartAction"
import { useEffect, useRef, useState } from "react"

const Bag = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cartReducer.items)
    const ref = useRef(null)
    const [subtotalPrice, setSubtotalPrice] = useState<any>(0)
    const objectsArray = Object.values(cartItems);

    useEffect(() => {
        const countSubtotal = () => {
            const totalPrice = objectsArray.reduce((acc: any, item: any) => {
                const sum = item.price * item.amount;
                return acc + sum;
            }, 0);
            setSubtotalPrice(totalPrice);
        };

        countSubtotal()
    }, [subtotalPrice])

    const closeHandler = () => {
        dispatch(closeBag())
    }

    const continueShippingHandler = () => {
        dispatch(closeBag())
    }

    const onBagListener = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current?.contains(e.target as Node)) {
            dispatch(closeBag());
        }
    };

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
                        return <div className={s.item}>
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
                                    <button className={s.decrement}>-</button>
                                    <div className={s.amount}>{item.amount}</div>
                                    <button className={s.increment}>+</button>
                                </div>
                            </div>
                        </div>
                    })}
                    <div className={s.shipping_info}>
                        <div className={s.taxes_info}>
                            <div className={s.taxes_inner}>
                                <p>TAXES AND SHIPPING CALCULATED AT CHECKOUT.</p>
                                <p>FREE SHIPPING IN CANADA ON ORDERS OVER CA$200.</p>
                            </div>
                        </div>
                        <div className={s.subtotal_box}>
                            <div className={s.subtotal_inner}>
                                <div>SUBTOTAL</div>
                                <div>${subtotalPrice}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.button_box}>
                    <div>
                        <button onClick={continueShippingHandler} className={s.continue_btn}>CONTINUE SHOPPING</button>
                    </div>
                    <div>
                        <button className={s.checkout_btn}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bag;