import {useContext, useState, useEffect} from 'react';
import { Button } from "./Button";
import {ProductContext} from '../context/ProductContext';

export const ProductCard = (item) => {
    const { addToBasket, incrementProduct, decrementProduct, setBasket } = useContext(ProductContext);
    const [isClicked, setIsClicked] = useState(false);
    const [productQuantity, setProductQuantity] = useState(0);

    useEffect(() => {
        if (productQuantity === 0) {
            setIsClicked(false);
        }
    }, [productQuantity]);

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
        const productInBasket = storedBasket.find(product => product.id === item.id);
        if (productInBasket) {
            setProductQuantity(productInBasket.quantity);
            setIsClicked(true);
        }
    }, [item.id]);

    const handleIncrement = () => {
        incrementProduct(item);
        setProductQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            updateBasketQuantity(newQuantity);
            return newQuantity;
        });
    };

    const handleDecrement = () => {
        decrementProduct(item);
        setProductQuantity(prevQuantity => {
            const newQuantity = prevQuantity - 1;
            updateBasketQuantity(newQuantity);
            return newQuantity;
        });
    };

    const updateBasketQuantity = (newQuantity) => {
        setBasket(prevBasket => {
            const updatedBasket = prevBasket.map(product => 
                product.id === item.id ? { ...product, quantity: newQuantity } : product
            );
            localStorage.setItem('basket', JSON.stringify(updatedBasket));
            return updatedBasket;
        });
    };

    return (
    <div key={item.id} className="product-card card bg-base-100 w-auto shadow-xl p-4">
        <img className="rounded max-h-[40%] max-w-[40%] m-auto justify-around" src={item.image} alt={item.title} />
        <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="font-bold">{item.price}€</p>
            <p className="font-">{item.description}</p>
            <p>{item.category}</p>
            {isClicked ?
            (<div className="flex"> 
            <Button className="btn btn-outline btn-success" title="+" onClick={handleIncrement} /> 
            <span>{productQuantity}</span>
            <Button className="btn btn-outline btn-success" title="-" onClick={handleDecrement} />
            </div>) :
            (<Button title="Add to Basket" className="btn btn-outline btn-success" onClick={() => (addToBasket(item), setIsClicked(true))} />)}
        </div>
    </div>
    );
}