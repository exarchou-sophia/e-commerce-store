import { Button2 } from './Button';

const Filter = ({setFilter}) => {
    const handleFilterClick = (category) => {
        setFilter(category);
    }
  return (
                <div className="filters flex justify-around mx-4 p-4">
                    <Button2 className="bg-white" title="All" onClick={() => handleFilterClick("all")}>All</Button2>
                    <Button2 className="" title="Men&apos;s Clothes" onClick={() => handleFilterClick("men's clothing")}>
                    </Button2>
                    <Button2 className="bg-orange-400" title="Jewelery" onClick={() => handleFilterClick("jewelery")}>
                    </Button2>
                    <Button2 className=" bg-green-500" title="Tech" onClick={() => handleFilterClick("electronics")}>
                    </Button2>
                    <Button2 className=" bg-pink-500" title="Women&apos;s Clothing" onClick={() => handleFilterClick("women's clothing")}>
                    </Button2>
                </div>
  )
}
export default Filter;