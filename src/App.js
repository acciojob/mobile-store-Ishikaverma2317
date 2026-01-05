import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import productsData from "./data";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/admin">Admin Panel</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />
        <Route
          path="/admin"
          element={
            <AdminPanel
              products={products}
              setProducts={setProducts}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
