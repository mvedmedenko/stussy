import s from "./Filter.module.css"



const Filter = () => {
    return (
        <div className={s.filter}>
            <div className={s.filter_box}>
                <div className={s.category}>
                    <div className={s.title}>CATEGORY</div>
                    <div className={s.grid_container}>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className={s.size}>
                    <div className={s.title}>SIZE</div>
                </div>
                <div className={s.color}>
                    <div className={s.title}>COLOR</div>
                </div>
                <div className={s.button_box}>
                    <div className={s.clear_btn}>
                        <button>CLEAR</button>
                    </div>
                    <div className={s.apply_btn}>
                        <button>APPLY FILTERS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;