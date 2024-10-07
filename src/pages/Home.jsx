import Filter from "../components/Filter";
import { ProductCard } from "../components/ProductCard";
import { useState } from "react";

const products = JSON.parse(localStorage.getItem("productData")) || [];
const Home = () => {
    const [filter, setFilter] = useState("all");
    const filteredProducts = products.filter(item =>
        filter === "all" ? true : item.category === filter
    );
    
    return (
        <>
            <div>
                <Filter setFilter={setFilter}/>
                <div className="product-grid grid grid-cols-4 gap-4">
                    {filteredProducts.map(item => (
                        <ProductCard key={item.id} {...item}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;