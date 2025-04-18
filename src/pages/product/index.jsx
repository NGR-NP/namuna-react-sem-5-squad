import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (data && data.length) {
      setProducts(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <Link viewTransition={"home"} to={"/"}>
          <div className="bg-purple-500">hello</div>
        </Link>
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
