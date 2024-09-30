import React from 'react'

const Filter = () => {
    const [filter, setFilter] = useState("all");
    const filteredProducts = products.filter(item =>
        filter === "all" ? true : item.category === filter
    );
  return (
                <div className="filters flex justify-around mx-4 p-4">
                    <button onClick={() => setFilter("all")}>All</button>
                    <button onClick={() => setFilter("men's clothing")}>
                        Men's Clothes
                    </button>
                    <button onClick={() => setFilter("jewelery")}>
                        Jewelery
                    </button>
                    <button onClick={() => setFilter("electronics")}>
                        Tech
                    </button>
                    <button onClick={() => setFilter("women's clothing")}>
                        Women's Clothing
                    </button>
                </div>
  )
}

export default Filter

// not ready yet