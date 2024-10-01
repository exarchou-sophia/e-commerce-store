import React, {useState} from 'react'

const Filter = ({setFilter}) => {
    // const [filter, setFilter] = useState("all");
    const handleFilterClick = (category) => {
        setFilter(category);
    }
  return (
                <div className="filters flex justify-around mx-4 p-4">
                    <button onClick={() => handleFilterClick("all")}>All</button>
                    <button onClick={() => handleFilterClick("men's clothing")}>
                        Men&apos;s Clothes
                    </button>
                    <button onClick={() => handleFilterClick("jewelery")}>
                        Jewelery
                    </button>
                    <button onClick={() => handleFilterClick("electronics")}>
                        Tech
                    </button>
                    <button onClick={() => handleFilterClick("women's clothing")}>
                        Women&apos;s Clothing
                    </button>
                </div>
  )
}
export default Filter;