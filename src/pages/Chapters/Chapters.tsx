import s from "./Chapters.module.css"



const Chapters: React.FC = () => {

    const asiaRegionAmounts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return (
        <div className={s.chapters}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.title_box}>
                        Asia
                    </div>
                    <div className={s.city_box}>
                        <div className={s.grid_container}>
                            {asiaRegionAmounts.map((i, index) => {
                                return <div key={index}>
                                <div className={s.city_title_box}>
                                    <div className={s.city_title}>
                                        STÜSSY BANGKOK
                                    </div>
                                    <div>
                                        MORE INFO
                                    </div>
                                </div>
                                <div className={s.text_box}>
                                    <div>
                                        Central Embassy,
                                        Level 2, Ploenchit Road, Pathumwan,
                                        Bangkok 10330 Thailand
                                        MAP
                                        Monday - Sunday
                                        10AM - 9PM
                                    </div>
                                    <div>
                                        <div>
                                            MAP
                                        </div>
                                        <div>
                                            <img src="" alt="arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chapters;