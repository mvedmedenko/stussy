import s from "./App.module.css"
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Features from './pages/Features/Features';
import Shop from './pages/Shop/Shop';
import Footer from './components/Footer/Footer';
import Login from './pages/Account/Auth/Login/Login';
import PrivateRoutes from './utils/PrivateRoutes';
import Account from './pages/Account/Account';
import Adress from './pages/Account/Adress';
import Register from './pages/Account/Auth/Register/Register';
import { useSelector } from "react-redux";
import Search from "./pages/Search/Search";
import Accessibilitys from "./pages/Support/Accessibilitys/Accessibilitys";
import Careers from "./pages/Support/Careers/Careers";
import Legal from "./pages/Support/Legal/Legal";
import Size from "./pages/Support/Size/Size";
import Returns from "./pages/Support/Returns/Returns";
import Customer from "./pages/Support/Customer/Customer";
import Blog from "./pages/Features/Blog/Blog";
import Chapters from "./pages/Chapters/Chapters";


function App() {

    const isSearch = useSelector((state) => state.searchReducer.isSearch)


    return (
        <BrowserRouter>
            <div className={s.inner}>
                <div className={s.header}>
                    <Header />
                </div>
                <div className={s.main}>
                    {isSearch ? <Search /> : null}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/collections/*" element={<Shop />} />
                        <Route path="/blogs" element={<Features />} />
                        <Route path="/account/login" element={<Login />} />
                        <Route path="/account/register" element={<Register />} />
                        <Route path="/pages/accessibilitys" element={<Accessibilitys />} />
                        <Route path="/pages/careers" element={<Careers />} />
                        <Route path="/pages/legal" element={<Legal />} />
                        <Route path="/pages/size-guide" element={<Size />} />
                        <Route path="/pages/shipping-returns" element={<Returns />} />
                        <Route path="/pages/customer-support" element={<Customer />} />
                        <Route path="/blogs/all" element={<Features/>} />
                        <Route path="/blogs/features/tagged/Collaborations" element={<Features/>} />
                        <Route path="/blogs/features/tagged/Collections" element={<Features/>} />
                        <Route path="/blogs/features/tagged/Features" element={<Features/>} />
                        <Route path="/blogs/features/tagged/Lookbooks" element={<Features/>} />
                        <Route path="/blogs/features/:id" element={<Blog/>} />
                        <Route path="/blogs/chapters" element={<Chapters/>} />
                        <Route element={<PrivateRoutes />}>
                            <Route path="/account" element={<Account />} />
                            <Route path="/account/adress" element={<Adress />} />
                        </Route>
                    </Routes>
                </div>
                <div className={s.footer}>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;