export const getInitialBasket = () => {
    const storedBasket = localStorage.getItem("Basket");
    return storedBasket ? JSON.parse(storedBasket) : {};
};
