import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) return <h3>Product not found</h3>;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>

      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default ProductDetails;
