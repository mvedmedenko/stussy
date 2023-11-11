import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Features from './pages/Features/Features';
import Support from './pages/Support/Support';
import Shop from './pages/Shop/Shop';
import Footer from './components/Footer/Footer';
import Login from './pages/Account/Auth/Login/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import Account from './pages/Account/Account';
import Adress from './pages/Account/Adress';
import { useSelector } from 'react-redux';
import Register from './pages/Account/Auth/Register/Register';


function App() {

    const isAuth = useSelector(state => state.authReducer.isAuth);

    return (
        <BrowserRouter>
            <div>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/collections" element={<Shop />} />
                        <Route path="/blogs" element={<Features />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/account/login" element={<Login />} />
                        <Route path="/account/register" element={<Register/>} />
                        <Route element={<PrivateRoutes isAuth={isAuth}/>}>
                            <Route path="/account" element={<Account/>} />
                            <Route path="/account/adress" element={<Adress/>} />
                        </Route>
                    </Routes>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
