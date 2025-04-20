import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const getData = useCallback(async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (data && data.length) {
      setProducts(data);
    }
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      <div>
        <img
          src="/vite.svg"
          className="size-40"
          style={{ viewTransitionName: "vite" }}
        />
        <div
          className="bg-purple-500 h-40 transition-all duration-500 "
          style={{ viewTransitionName: "home" }}
        >
          hello
        </div>
      </div>
      <h1>Product Page</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products?.map((product) => (
          <Link
            viewTransition={`product${product?.id}`}
            to={`/product/${product.id}`}
            key={product?.id}
          >
            <div
              style={{
                border: "1px solid",
                backgroundColor: "purple",
                color: "white",
                padding: "1rem",
              }}
            >
              <img src={product?.image} style={{ height: "3rem" }} />
              <h3>{product?.title}</h3>
              <h3>{product?.description}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
