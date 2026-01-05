import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h2>Mobile Store</h2>
      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>
            {p.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
