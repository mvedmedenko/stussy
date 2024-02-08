import s from "./Loader.module.css"



const Loader = () => {
    return (
        <div>
            <div className={s.inner}>
                <div className={s.loading}>LOADING...</div>
            </div>
        </div>
    )
}

export default Loader;