// import Filter from "../components/Filter";
import FetchApi from "../Utils/FetchApi";
import React, { useState } from "react";

const products2 = [
    { id: 1, title: "Men's T-Shirt", price: "$20", category: "men" },
    { id: 2, title: "Women's Dress", price: "$40", category: "women" },
    { id: 3, title: "Smartphone", price: "$300", category: "tech" },
    { id: 4, title: "Laptop", price: "$1000", category: "tech" },
    { id: 5, title: "Men's Jeans", price: "$50", category: "men" },
    { id: 6, title: "Women's Skirt", price: "$30", category: "women" },
];
const products = JSON.parse(localStorage.getItem("productData")) || [];
const Home = () => {
    const [filter, setFilter] = useState("all");
    const filteredProducts = products.filter((item) =>
        filter === "all" ? true : item.category === filter
    );

    return (
        <>
            <div>
                <FetchApi />
                <div className="filters">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("men's clothing")}>Men's Clothes</button>
            <button onClick={() => setFilter("jewelery")}>Jewelery</button>
            <button onClick={() => setFilter("electronics")}>Tech</button>
            <button onClick={() => setFilter("women's clothing")}>Women's Clothing</button>
        </div>
                
                <div className="product-grid">
                    {filteredProducts.map(item => (
                        <div key={item.id} className="product-card">
                            <img
                                src={item.image}
                                alt={item.title}
                            />
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            <p>{item.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;