import { useNavigate } from 'react-router-dom'
import s from './Productnav.module.css'
import { useSelector } from 'react-redux'


const Productnav = () => {

    const allProducts = useSelector((state) => state.shopReducer.products)
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
    const prevCollectionName = localStorage.getItem('prevCollection')
    const navigate = useNavigate()

    const prevPageHandler = () => {
        navigate(-1)
    }

    const nextProductHandler = () => {
        const existingItemIndex = allProducts.findIndex((i) => i.id === selectedItem.id);
        const nextItem = allProducts[existingItemIndex + 1]
    } 
    return (
        <div>
            <div className={s.inner}>
                <div onClick={prevPageHandler} className={s.back}>
                    <div></div>
                    <div>BACK TO {prevCollectionName}</div>
                </div>
                <div onClick={nextProductHandler} className={s.next}>
                    <div>NEXT PRODUCT</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}


export default Productnav