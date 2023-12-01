import { NavLink } from "react-router-dom"
import s from "./Accessibilitys.module.css"


const Accessibilitys = () => {
    return (
        <div>
            <div className="container">
                <div className={s.inner}>
                    <div>
                        <h2 className={s.title}>
                            ACCESSIBILITY
                        </h2>
                    </div>
                    <div>
                        <p className={s.text}>Stüssy is committed to digital accessibility, and to conforming to the Web Content Accessibility Guidelines (WCAG) 2.1, <br />
                            Level A and AA and complying with Americans with Disabilities Act (ADA) effective communication requirements, and other applicable regulations.</p>
                        <p className={s.text}>To accomplish this, we have partnered with eSSENTIAL Accessibility to administer our accessibility program and oversee its governance.
                            Their accessibility program evaluates our digital products on an ongoing basis in accordance with best <br />
                            practices and is supported by a diverse team of accessibility professionals, including users of assistive technologies.
                            The platform, moreover, goes beyond minimum compliance requirements by making an assistive
                            CX technology application <br /> available to customers who have trouble typing, gesturing, moving a mouse, or reading.
                            The application is free to download <br /> and it incorporates tools such as mouse and keyboard replacements,
                            voice recognition, speech enablement, hands-<br />free/touch-free  navigation, and more.
                            We want to hear from you if you encounter any accessibility barriers on our digital properties.</p>
                    </div>
                    <div className={s.download}>
                        <NavLink target="_blank" to="https://www.levelaccess.com/a/stussy/">Stüssy & Essential Accessibility Application Download</NavLink>
                    </div>
                    <div>
                        <div className={s.subtitle}>
                            Our Contact Information
                        </div>
                        <div className={s.email_box}>
                            Regardless of your location, any questions, comments,
                            and requests regarding accessibility are welcome and should be addressed to our legal department at&nbsp;
                            <a className={s.email} href="mailto:support@stussy.com">support@stussy.com</a>
                        </div>
                        <div className={s.address}>
                            Communication can also be addressed to: <br />
                            Attn: Stüssy Web Operations <br />
                            Stüssy, Inc. <br />
                            17426 Daimler Street <br />
                            Irvine, CA 92614 <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accessibilitys