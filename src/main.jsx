// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import {
//   BrowserRouter,
//   Outlet,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router";
// import "./index.css";

// const Layout = () => {
//   return (
//     <div>
//       <h1>Layout</h1>
//       <Outlet />
//     </div>
//   );
// };
// const AppRouter = () => {
//   const location = useLocation();
//   console.log(location);
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/about" element={<div>ABout page</div>} />
//         <Route path="/contact" element={<div>Contact page</div>} />
//         <Route path="/product">
//           <Route index element={<div>Product page</div>} />
//           <Route path=":id" element={<div>single page</div>} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };
// createRoot(document.getElementById("namuna")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <AppRouter />
//     </BrowserRouter>
//   </StrictMode>
// );

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Outlet />
//     </div>
//   );
// }
