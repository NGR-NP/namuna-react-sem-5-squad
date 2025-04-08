// import { useEffect, useState } from "react";
// export default function LearnUseEffect() {
//   const [count, setCount] = useState(0);
//   const [clicked, setClicked] = useState(0);
//   useEffect(() => {
//     setCount(count + 1);
//   }, [clicked]);
//   return (
//     <div>
//       <h1>Learn Use Effect</h1>

import { useEffect, useState } from "react";

//       <div>{count}</div>

//       <div>
//         <button onClick={() => setClicked(clicked + 1)}>Button</button>
//       </div>
//     </div>
//   );
// }

export default function LearnUseEffect() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://67f36fc9ec56ec1a36d5c788.mockapi.io/products"
    );
    const data = await res.json();
    console.log("-----", data);
    setProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Learn Use Effect</h1>
      <div>
        <p>{products?.length}</p>
        <div>
          <button onClick={getData}>Refetch</button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products?.map((product) => {
          return (
            <div
              key={product.id}
              style={{ border: "1px solid", backgroundColor: "gray" }}
            >
              <h1>{product?.name}</h1>
              <img src={product?.img} style={{ height: "2rem" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
