// import { useState } from "react";

// const lists = [
//   {
//     name: "sahil",
//     age: 33,
//   },
//   {
//     name: "tezz",
//     age: 33,
//   },
//   {
//     name: "jhon",
//     age: 41,
//   },
// ];

// export default function Homepage() {
//   const [count, setCount] = useState(0);
//   function handleInc() {
//     setCount(count + 1);
//   }
//   function handleDec() {
//     setCount(count - 1);
//   }
//   function handleCount(type) {
//     if (type === "inc") {
//       setCount(count + 1);
//     } else {
//       setCount(count - 1);
//     }
//   }
//   return (
//     <div style={{ width: "100%", textAlign: "center" }}>
//       <h1>Home page</h1>
//       <div>
//         {count}
//         <div>
//           <button onClick={() => setCount(count + 1)}>INC</button>
//           <button onClick={() => setCount(count - 1)}>DEC</button>
//         </div>

//         <div>
//           <p>with function</p>
//           <button onClick={handleInc}>INC</button>
//           <button onClick={handleDec}>DEC</button>
//         </div>

//         <div>
//           <p>with function with parameter</p>
//           <button onClick={() => handleCount("inc")}>INC</button>
//           <button onClick={handleCount}>DEC</button>
//         </div>
//         {/* <input /> */}
//       </div>
//       {/* <div>
//         {lists.map((list, index) => (
//           <div key={index}>
//             <div>{index}</div>
//             <Card data={list} />
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// }

// const Card = ({ data }) => {
//   return (
//     <div style={{ backgroundColor: "purple", border: "1px solid white" }}>
//       <h2>Name: {data.name}</h2>
//       <p>age: {data.age}</p>
//     </div>
//   );
// };

// // import HeroSection from "../section/HeroSection";

// // export function HOmePage() {
// //   let count = 4;
// //   return (
// //     <div>
// //       <h1>Parent component</h1>
// //       <HeroSection />
// //       <ChildComp count={count} greet="hello" name={"tezz"} />
// //       <ChildComp count={count} greet="welcom back" name={"sahil"} />
// //       <SecondChildComp greet="welcome" />
// //     </div>
// //   );
// // }

// // const SecondChildComp = (props) => {
// //   return (
// //     <div>
// //       <h2>SecondChildComp</h2>
// //       <div>{props.greet}</div>
// //     </div>
// //   );
// // };
// // const ChildComp = ({ count, greet = "welcome", ...rest }) => {
// //   return (
// //     <div
// //       // style={{ backgroundColor: "gray", border: "1px solid" }}
// //       className="childCard"
// //     >
// //       <p>Child Component</p>
// //       <div>
// //         {greet} {rest.name}
// //       </div>
// //       <SubSchildComp count={count} />
// //     </div>
// //   );
// // };

// // const SubSchildComp = ({ count }) => {
// //   return (
// //     <div>
// //       <h2>SubSchildComp</h2>
// //       {count}
// //     </div>
// //   );
// // };
