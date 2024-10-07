import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BasketPage from "./pages/BasketPage";
import Hero from "./components/Hero";
import ProductProvider from "./context/ProductContext";
import Footer from "./components/Footer";
import FetchApi from "./Utils/FetchApi";

const App = () => {

    return (
        <ProductProvider>
            <FetchApi />
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route
                        path="/Home"
                        element={<Home />}
                    />
                    <Route
                        path="/BasketPage"
                        element={
                            <BasketPage />
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </ProductProvider>
    );
};

export default App;
