import {useContext} from 'react'
import { Button } from "./Button";
import {ProductContext} from '../context/ProductContext';

export const ProductCard = (item) => {
    const { addToBasket } = useContext(ProductContext);
    return(
    <div key={item.id} className="product-card card bg-base-100 w-auto shadow-xl p-4">
        <img className="rounded max-h-[40%] max-w-[40%] m-auto justify-around" src={item.image} alt={item.title} />
        <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="font-bold">{item.price}€</p>
            <p className="font-light">{item.description}</p>
            <p>{item.category}</p>
            <Button className="btn btn-outline btn-success" title="Add to Cart" onClick={() => addToBasket(item)}/>
        </div>
    </div>
);}

<div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>