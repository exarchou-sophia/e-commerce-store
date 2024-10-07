import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const BasketPage = () => {
    const { basket, incrementProduct, decrementProduct, deleteProduct } =
        useContext(ProductContext);

    // Calculate total amount and total quantity
    const totalQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = basket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Basket</h1>

            {basket.length === 0 ? (
                <p>Your basket is empty</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 gap-6">
                        {basket.map(item => (
                            <div
                                key={item.id}
                                className="p-4 border rounded-md shadow-md flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-md mr-4"
                                    />
                                    <div>
                                        <h2 className="font-bold">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-600">
                                            Price: ${item.price}
                                        </p>
                                        <p className="text-gray-600">
                                            Quantity: {item.quantity}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() =>
                                            incrementProduct(item.id)
                                        }
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() =>
                                            decrementProduct(item.id)
                                        }
                                        className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => deleteProduct(item.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-4 border-t">
                        <h2 className="text-xl font-bold">
                            Total Products: {totalQuantity}
                        </h2>
                        <h2 className="text-xl font-bold">
                            Total Amount: ${totalAmount.toFixed(2)}
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BasketPage;
