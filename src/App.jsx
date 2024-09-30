import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BasketPage from "./pages/BasketPage";
import { getInitialBasket } from "./Utils/CartUtils";

const App = () => {
    const [Basket, setBasket] = useState(getInitialBasket());

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
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
    );
};

export default App;
