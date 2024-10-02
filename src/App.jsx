import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BasketPage from "./pages/BasketPage";
import { getInitialBasket } from "./Utils/CartUtils";
import Hero from "./components/Hero";
import ProductProvider from "./context/ProductContext";

const App = () => {
    const [Basket, setBasket] = useState(getInitialBasket());

    return (
        <ProductProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route
                        path="/Home"
                        element={<Home Basket={Basket} setBasket={setBasket} />}
                    />
                    <Route
                        path="/BasketPage"
                        element={
                            <BasketPage Basket={Basket} setBasket={setBasket} />
                        }
                    />
                </Routes>
            </Router>
        </ProductProvider>
    );
};

export default App;
