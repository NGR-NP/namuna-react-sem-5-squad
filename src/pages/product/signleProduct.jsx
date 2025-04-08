import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function SingleProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errr, setError] = useState(null);
  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const data = await res.json();
      if (data) {
        setProduct(data);
      }
    } catch (errr) {
      console.error(errr);
      setIsError(true);
      setError("something went wrong while featching data");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Single Product Page</h1>
      {isLoading ? (
        <div>loading...</div>
      ) : isError ? (
        <div>{errr}</div>
      ) : (
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
      )}
    </div>
  );
}
