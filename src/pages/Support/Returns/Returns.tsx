import { NavLink } from "react-router-dom";
import s from "./Returns.module.css"


const Returns = () => {
    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.shipping_box}>
                        <div>
                            <h2 className={s.title}>SHIPPING & HANDLING</h2>
                        </div>
                        <div>
                            <div>
                                <h3 className={s.subtitle}>ORDER PROCESSING</h3>
                            </div>
                            <div>
                                <p className={s.text}>
                                    Orders placed on stussy.com are processed Monday–Friday and shipped within 3-7 business days. <br />
                                    Excluding the weekend and major holidays. Once your order is processed and shipped,
                                    you will receive <br /> an email notification with your tracking information
                                    <p className={s.text}>
                                        DISCLAIMER: Cancelation and address modification requests for orders placed on Friday-Sunday will <br /> not be accepted.
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className={s.subtitle}>U.S. SHIPPING</h3>
                            </div>
                            <div>
                                <p className={s.text}>We offer the following domestic shipping rates in the U.S. below:</p>
                                <ul className={s.list}>
                                    <li className={s.item}>Standard – $7</li>
                                    <li className={s.item}>Free shipping in the U.S. for all orders over $200</li>
                                </ul>
                                <p className={s.text}>Exclusions apply for Alaska, Hawaii, Puerto Rico, Virgin Islands, APO, FPO and P.O. Boxes in the U.S. <br /> below:</p>
                                <ul className={s.list}>
                                    <li className={s.item}>Standard – $15</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className={s.international_subtitle}>INTERNATIONAL SHIPPING</h3>
                            </div>
                            <div>
                                <p className={s.text}>Stussy.com ships to the following countries:</p>
                                <ul className={s.list}>
                                    <li className={s.item}>Brazil, Canada, Costa Rica, Dominican Republic, Ecuador, El Salvador,
                                        Guatemala, Hong Kong, <br /> Hungary, Indonesia, Jamaica, Mexico, Panama, Singapore, South Africa, Taiwan, Thailand, and <br /> Uruguay
                                    </li>
                                    <li className={s.item}>DHL Express - $20</li>
                                </ul>
                                <p className={s.text}>Exclusions apply for the select shipping countries:</p>
                                <ul className={s.list}>
                                    <li className={s.item}>Argentina, Colombia, Philippines, and Vietnam</li>
                                    <li className={s.item}>DHL Express – $25</li>
                                </ul>
                                <p className={s.text}>
                                    If you receive an email from DHL or your local customs agency requesting for additional payment, <br /> please contact&nbsp;
                                    <a className={s.email} href="mailto:support@stussy.com">support@stussy.com</a>.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className={s.subtitle}>INTERNATIONAL DUTIES & TAXES</h3>
                            </div>
                            <div>
                                <p className={s.text}>International orders will be subject to:</p>
                                <ul className={s.list}>
                                    <li className={s.item}>Terms & Conditions and Privacy Policy via Global-E. This will be presented to you at checkout.</li>
                                    <li className={s.item}>Global-E will act as the seller of record for these orders.</li>
                                </ul>
                                <p className={s.text}>Payment of duties at checkout through Global-E covers the following:</p>
                                <ul className={s.list}>
                                    <li className={s.item}>The stated fees at the time of checkout which includes non-refundable customs duties and taxes.</li>
                                    <li className={s.item}>The payment of stated fees at the time of checkout which includes customs duties and taxes.</li>
                                </ul>
                                <p className={s.contact}>
                                    For more information, please contact&nbsp;
                                    <a className={s.email} href="mailto:support@stussy.com">support@stussy.com</a>&nbsp;
                                    or visit our Live Chat.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={s.return_box}>
                        <div>
                            <h2 className={s.title}>RETURN GUIDELINES</h2>
                        </div>
                        <div>
                            <div>
                                <h3 className={s.subtitle}>RETURN POLICY</h3>
                            </div>
                            <div>
                                <ul className={s.list}>
                                    <li className={s.item}>You have up to 7 days upon receiving shipment to return items purchased on stussy.com.</li>
                                    <li className={s.item}>Orders must be returned by mail only.</li>
                                    <li className={s.item}>Returned item(s) must be in new and unused condition with the original tags still attached.</li>
                                    <li className={s.item}>Undergarments, swimwear, and fragrance cannot be returned due to our hygiene policy.</li>
                                    <li className={s.item}>Once your order is received and inspected, a refund to your original payment method will be <br /> processed.</li>
                                    <li className={s.item}>Shipping charges are non-refundable.</li>
                                    <li className={s.item}>Once your returned is delivered allow 3-5 business days for inspection.</li>
                                    <li className={s.item}>After inspection allow 24-48 hours for your refund to be processed.</li>
                                    <li className={s.item}>We do not accept returns or exchanges for Stüssy products not purchased from stussy.com.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className={s.disclaimer_subtitle}>DISCLAIMER</h3>
                            </div>
                            <div>
                                <p className={s.text}>Frequent returns or unusual patterns/activities will be flagged in our system. If we notice that our return <br /> policy is being abused,
                                    we reserve the right to cancel or refuse future orders and cancellation requests. <br />
                                    Please review our&nbsp;
                                    <NavLink className={s.link} to="/pages/legal">TERMS OF USE.</NavLink>
                                </p>
                                <h3 className={s.subtitle}>VISIT OUR SELF SERVICE RETURN PORTALS BELOW:</h3>
                                <ul className={s.list}>
                                    <li className={s.item}>U.S. Customers - Returns Portal&nbsp;
                                        <NavLink target="_blank" className={s.link} to="https://returns.stussy.com/#/?_gl=1*1r9509n*_ga*MTE2MTc0MDg4Ny4xNjk2OTY1Mjc0*_ga_LV0W6CQC05*MTcwMDI3MDI2Mi42NS4xLjE3MDAyNzEyMjcuMi4wLjA.">
                                            HERE
                                        </NavLink>
                                    </li>
                                    <li className={s.item}>International Customers or Global-E - Returns Portal&nbsp;
                                        <NavLink target="_blank" className={s.link} to="https://web.global-e.com/returns/portal/oQH0">
                                            HERE
                                        </NavLink>
                                    </li>
                                    <li className={s.item}>By using our returns portal All Stussy.com return submissions are reviewed for approval.</li>
                                    <li className={s.item}>Domestic and international Global-E returns are charged a flat rate when you use our pre-paid <br /> returns shipping label. </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3 className={s.subtitle}>DISCLAIMER</h3>
                            </div>
                            <div>
                                <p className={s.text}>
                                    <span className={s.disclaimer_text}>
                                        Returns we receive that do not use the provided return shipment label will be refused.
                                        Any <br />alternations to the label will not be accepted.
                                    </span>
                                </p>
                                <h3 className={s.subtitle}>EXCHANGES</h3>
                                <p className={s.text}>
                                    Stussy.com does not offer exchanges. We ask that you return the product for a full refund and place a <br />
                                    new order for the preferred item(s).
                                </p>
                                <h3 className={s.subtitle}>SPECIAL COLLABORATIONS</h3>
                                <p className={s.text}>
                                    <b>All sales are final</b> for any purchases on Nike, limited edition, and/or special collaboration products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Returns;