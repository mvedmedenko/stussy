import {Outlet, Navigate} from "react-router-dom"
import { useSelector } from "react-redux";



const PrivateRoutes = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth);

    return isAuth ? <Outlet/> : <Navigate to="/account/login"/>
}

export default PrivateRoutes;