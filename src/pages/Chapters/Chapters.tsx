import s from "./Chapters.module.css"
import arrow from "../../assets/images/map-arrow.svg"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"
import { setNavigationActiveList } from "../../redux/actions/headerActions"
import { useAppDispatch } from "../../hooks/hooks"


const Chapters: React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setNavigationActiveList("chapters"))
    }, [])

    const asiaRegionAmounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const europeRegionAmounts = [1, 2, 3, 4, 5]
    const northAmericaRegionAmounts = [1, 2, 3, 4, 5, 6]
    const oceaniaRegionAmounts = [1, 2]
    const doverRegionAmounts = [1, 2, 3, 4, 5]


    return (
        <div className={s.chapters}>
            <section className={s.section} id="Asia">
                <div className="container_images">
                    <div className={s.inner}>
                        <div className={s.title_box}>
                            <h2>ASIA</h2>
                        </div>
                        <div className={s.city_box}>
                            <div className={s.grid_container}>
                                {asiaRegionAmounts.map((i, index) => {
                                    return <div key={index}>
                                        <div className={s.city_title_box}>
                                            <div className={s.city_title}>
                                                STÜSSY BANGKOK
                                            </div>
                                            <div className={s.more_info}>
                                                MORE INFO
                                            </div>
                                        </div>
                                        <div className={s.text_box}>
                                            <div className={s.text}>
                                                Central Embassy, <br />
                                                Level 2, Ploenchit Road, Pathumwan,<br />
                                                Bangkok 10330 Thailand
                                                MAP
                                            </div>
                                            <NavLink className={s.map_link} target="_blank" to="https://www.google.com/maps/place/Thanon+Phloen+Chit,+Khwaeng+Lumphini,+Khet+Pathum+Wan,+Krung+Thep+Maha+Nakhon+10330,+Thailand/@13.7436325,100.5405448,17z/data=!3m1!4b1!4m7!3m6!1s0x30e29edb6c06219d:0xac4075787ceb63b9!8m2!3d13.7436273!4d100.5454157!15sCjpMZXZlbCAyLCBQbG9lbmNoaXQgUm9hZCwgUGF0aHVtd2FuLCBCYW5na29rIDEwMzMwIFRoYWlsYW5kkgEFcm91dGXgAQA!16s%2Fg%2F122dlfxm?entry=tts&shorturl=1">
                                                <div className={s.map_text}>
                                                    <div>
                                                        MAP
                                                    </div>
                                                    <div>
                                                        <img width="10px" height="10px" src={arrow} alt="arrow" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={s.schedule}>
                                            <p>
                                                Monday - Sunday <br />
                                                10AM - 9PM
                                            </p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.section} id="UnitedKingdom">
                <div className="container_images">
                    <div className={s.inner}>
                        <div className={s.title_box}>
                            <h2>EUROPE/ UNITED KINGDOM</h2>
                        </div>
                        <div className={s.city_box}>
                            <div className={s.grid_container}>
                                {europeRegionAmounts.map((i, index) => {
                                    return <div key={index}>
                                        <div className={s.city_title_box}>
                                            <div className={s.city_title}>
                                                STÜSSY MILAN
                                            </div>
                                            <div className={s.more_info}>
                                                MORE INFO
                                            </div>
                                        </div>
                                        <div className={s.text_box}>
                                            <div className={s.text}>
                                                Corso Di Porta Ticinese, 103 <br />
                                                20123 Milano <br />
                                                Milan, Italy
                                            </div>
                                            <NavLink className={s.map_link} target="_blank" to="https://www.google.com/maps/place/ST%C3%9CSSY+Store+Milano/@45.4548335,9.1806436,17z/data=!3m1!4b1!4m5!3m4!1s0x4786c400a780e89b:0xbf2befaf200e9153!8m2!3d45.4548337!4d9.1806416?coh=164777&entry=tt&shorturl=1">
                                                <div className={s.map_text}>
                                                    <div>
                                                        MAP
                                                    </div>
                                                    <div>
                                                        <img width="10px" height="10px" src={arrow} alt="arrow" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={s.schedule}>
                                            <p>
                                                Tuesday - Saturday <br />
                                                10:30AM - 1:30PM <br />
                                                2:30PM - 7:30PM
                                            </p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.section} id="NorthAmerica">
                <div className="container_images">
                    <div className={s.inner}>
                        <div className={s.title_box}>
                            <h2>NORTH AMERICA</h2>
                        </div>
                        <div className={s.city_box}>
                            <div className={s.grid_container}>
                                {northAmericaRegionAmounts.map((i, index) => {
                                    return <div key={index}>
                                        <div className={s.city_title_box}>
                                            <div className={s.city_title}>
                                                STÜSSY ARCHIVE
                                            </div>
                                            <div className={s.more_info}>
                                                MORE INFO
                                            </div>
                                        </div>
                                        <div className={s.text_box}>
                                            <div className={s.text}>
                                                200 E 4th Street <br />
                                                Santa Ana, CA 92701
                                            </div>
                                            <NavLink className={s.map_link} target="_blank" to="https://www.google.com/maps/place/St%C3%BCssy+Archive/@33.7478985,-117.8664752,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd968857bce7d:0x88560fa38372ea11!8m2!3d33.7478631!4d-117.8664976?coh=164777&entry=tt&shorturl=1">
                                                <div className={s.map_text}>
                                                    <div>
                                                        MAP
                                                    </div>
                                                    <div>
                                                        <img width="10px" height="10px" src={arrow} alt="arrow" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={s.schedule}>
                                            <p>
                                                Monday - Sunday <br />
                                                12PM - 6PM
                                            </p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.section} id="Oceania">
                <div className="container_images">
                    <div className={s.inner}>
                        <div className={s.title_box}>
                            <h2>OCEANIA</h2>
                        </div>
                        <div className={s.city_box}>
                            <div className={s.grid_container}>
                                {oceaniaRegionAmounts.map((i, index) => {
                                    return <div key={index}>
                                        <div className={s.city_title_box}>
                                            <div className={s.city_title}>

                                                STÜSSY GUAM
                                            </div>
                                            <div className={s.more_info}>
                                                MORE INFO
                                            </div>
                                        </div>
                                        <div className={s.text_box}>
                                            <div className={s.text}>
                                                1275 Pale San Vitores Road <br />
                                                Suite 169 <br />
                                                Tumon Bay, Guam 96913
                                            </div>
                                            <NavLink className={s.map_link} target="_blank" to="https://www.google.com/maps/place/Stussy/@13.514707,144.8058305,17z/data=!3m2!4b1!5s0x671f828b4076e1d1:0xa3050b8e5e3bbba0!4m5!3m4!1s0x671f828b2420e03b:0xee7432d3722bbc0c!8m2!3d13.514707!4d144.8058305?coh=164777&entry=tt&shorturl=1">
                                                <div className={s.map_text}>
                                                    <div>
                                                        MAP
                                                    </div>
                                                    <div>
                                                        <img width="10px" height="10px" src={arrow} alt="arrow" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={s.schedule}>
                                            <p>
                                                Monday - Sunday <br />
                                                11AM - 7PM
                                            </p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.section} id="StreetMarket">
                <div className="container_images">
                    <div className={s.inner}>
                        <div className={s.title_box}>
                            <h2>DOVER STREET MARKET</h2>
                        </div>
                        <div className={s.city_box}>
                            <div className={s.grid_container}>
                                {doverRegionAmounts.map((i, index) => {
                                    return <div key={index}>
                                        <div className={s.city_title_box}>
                                            <div className={s.city_title}>

                                                DSM SINGAPORE
                                            </div>
                                            <div className={s.more_info}>
                                                MORE INFO
                                            </div>
                                        </div>
                                        <div className={s.text_box}>
                                            <div className={s.text}>
                                                Block 18 Dempsey Road <br/>
                                                Singapore 249677
                                            </div>
                                            <NavLink className={s.map_link} target="_blank" to="https://www.google.com/maps/place/Dover+Street+Market+Singapore/@1.3057491,103.8098007,18z/data=!4m5!3m4!1s0x31da1a22d9c8acf5:0xe27309ad5a1f4ac!8m2!3d1.3057491!4d103.810895?coh=164777&entry=tt&shorturl=1">
                                                <div className={s.map_text}>
                                                    <div>
                                                        MAP
                                                    </div>
                                                    <div>
                                                        <img width="10px" height="10px" src={arrow} alt="arrow" />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={s.schedule}>
                                            <p>
                                                Monday - Sunday <br/>
                                                11AM - 8PM
                                            </p>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Chapters;