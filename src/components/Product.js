export default function Product() {
  //const products = ["Laptop", "Modem", "Screen", "Phone"];
  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Modem", price: 50 },
    { id: 3, name: "Screen", price: 200 },
    { id: 4, name: "Laptop", price: 900 },
  ];
  const productList = products.map((product) => (
    <h3 key={product.id}>
      {product.name}: €{product.price}
    </h3>
  ));
  return <div>{productList}</div>;
}
