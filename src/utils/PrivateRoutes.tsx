import {Outlet, Navigate} from "react-router-dom"
import { useAppSelector } from "../hooks/hooks";



const PrivateRoutes = () => {
    const isAuth = useAppSelector(state => state.authReducer.isAuth);

    return isAuth ? <Outlet/> : <Navigate to="/account/login"/>
}

export default PrivateRoutes;