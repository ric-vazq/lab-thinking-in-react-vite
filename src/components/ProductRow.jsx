function ProductRow(props) {
  const { product } = props;
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      {product.inStock ? <td className="px-6 py-4">{product.name}</td> : <td className="px-6 py-4 text-red-700">{product.name}</td>}
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
