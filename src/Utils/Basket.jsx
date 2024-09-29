import  {useState, useEffect} from "react";

const Basket = () => {
    const [items, setItems] = useState ([])

    useEffect(() => {
        const storedBasketItems = localStorage.getItem("basketItems");
        storedBasketItems && setItems(JSON.parse("storedBasketItems"));
    
    }, []);

    useEffect (() => {
        items.length && localStorage.setItem("basketItems", JSON.stringify(items));

    } [items]);
}
