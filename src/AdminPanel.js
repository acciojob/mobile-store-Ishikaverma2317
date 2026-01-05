import { useState } from "react";
import { Link } from "react-router-dom";

function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price)
    };

    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", image: "", price: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updatePrice = (id, price) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, price } : p
      )
    );
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <input className="form-control" placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input className="form-control" placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input className="form-control" placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <input className="form-control" placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button onClick={addProduct}>Add</button>

      <hr />

      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>{p.name}</Link>

          <input
            className="form-control"
            type="number"
            defaultValue={p.price}
            onChange={(e) =>
              updatePrice(p.id, Number(e.target.value))
            }
          />

          <button className="float-right">
            Save
          </button>

          <button
            className="float-right"
            onClick={() => deleteProduct(p.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
