import {useContext} from 'react'
import { Button } from "./Button";
import {ProductContext} from '../context/ProductContext';

export const ProductCard = (item) => {
    const { addToBasket } = useContext(ProductContext);
    return(
    <div key={item.id} className="product-card card bg-base-100 w-auto shadow-xl p-4">
        <img className="rounded max-h-[40%] max-w-[40%] m-auto" src={item.image} alt={item.title} />
        <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p>{item.price}€</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <Button title="Add to Cart" onClick={() => addToBasket(item)}/>
        </div>
    </div>
);}

