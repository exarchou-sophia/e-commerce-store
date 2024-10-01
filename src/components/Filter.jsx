import React from 'react'

const Filter = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterClick = (category) => {
        setFilter(category);
        onFilterChange(category);

    // const filteredProducts = products.filter(item =>
    //     filter === "all" ? true : item.category === filter
    // );
  return (
                <div className="filters flex justify-around mx-4 p-4">
                    <button onClick={() => handleFilterClick("all")}>All</button>
                    <button onClick={() => handleFilterClick("men's clothing")}>
                        Men's Clothes
                    </button>
                    <button onClick={() => handleFilterClick("jewelery")}>
                        Jewelery
                    </button>
                    <button onClick={() => handleFilterClick("electronics")}>
                        Tech
                    </button>
                    <button onClick={() => handleFilterClick("women's clothing")}>
                        Women's Clothing
                    </button>
                </div>
  )
}

export default Filter

// not ready yet