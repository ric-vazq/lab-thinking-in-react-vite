import { useState } from "react";
import jsonData from "../data.json";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState("");

  function searchQueryChange (event) {
    return setQuery(event.target.value)
  }
  return (
    <div className="font-mono">
      <div className="flex flex-col justify-center align-middle text-center my-10">
        <h1 className="text-4xl">React | Thinking in React</h1>
        <h2 className="text-2xl mt-10 bg-emerald-600">Ironstore</h2>
      </div>

      <SearchBar searchFunction={searchQueryChange}/>

      <div className="w-1/2 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
        <ProductTable products={products} query={query}/>
      </div>
    </div>
  );
}

export default ProductsPage;
