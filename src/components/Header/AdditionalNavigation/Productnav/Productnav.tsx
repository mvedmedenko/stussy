import { useNavigate } from 'react-router-dom'
import s from './Productnav.module.css'
import { useAppDispatch } from '../../../../hooks/hooks'
import { setNavigationActiveList } from '../../../../redux/actions/headerActions'


const Productnav = () => {

    const dispatch = useAppDispatch()
    const prevCollectionName = localStorage.getItem('prevCollection')
    const navigate = useNavigate()

    const prevPageHandler = () => {
        navigate(-1)
        dispatch(setNavigationActiveList("shop"))
    } 
    return (
        <div>
            <div className={s.inner}>
                <div onClick={prevPageHandler} className={s.back}>
                    <div>BACK TO {prevCollectionName}</div>
                </div>
            </div>
        </div>
    )
}


export default Productnav