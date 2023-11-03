import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Features from './pages/Features/Features';
import Support from './pages/Support/Support';
import Shop from './pages/Shop/Shop';
function App() {
  return (
      <BrowserRouter>
          <div>
              <div>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/collections" element={<Shop/>}/>
                      <Route path="/blogs" element={<Features/>}/>
                      <Route path="/support" element={<Support/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}
export default App;
