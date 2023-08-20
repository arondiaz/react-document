const productsList = [
  { id: 1, title: "macbook", price: "3000" },
  { id: 2, title: "mac mini", price: "2400" },
  { id: 3, title: "macbook air" },
];

export const Products = () => {
  const list = productsList.map((product) => (
    <li key={product.id}>{product.title} - {product.price}</li>
  ));

  return (
    <>
      <ul>{list}</ul>
    </>
  );
};
