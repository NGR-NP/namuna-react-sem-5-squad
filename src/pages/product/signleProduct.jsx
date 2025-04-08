import { useParams } from "react-router";
export default function SingleProductPage() {
  const { productID } = useParams();
  return (
    <div>
      <h1>Single Product Page</h1>
      {productID}
    </div>
  );
}
