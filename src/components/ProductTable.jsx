import ProductRow from "./ProductRow";

function ProductTable(props) {
  const { products, query } = props;
  return (
    <table className="w-full text-base text-center">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3" scope="col">
            Name
          </th>
          <th className="px-6 py-3" scope="col">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {products
          .filter((product) => {
            if (query === "") {
              return product;
            } else if (
              product.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return product;
            } else return;
          })
          .map((product) => {
            return <ProductRow product={product} key={product.id} />;
          })}
      </tbody>
    </table>
  );
}

export default ProductTable;
