import { Routes, Route } from "react-router";
import HomePage from "./pages/homePage";
import SingleProductPage from "./pages/product/signleProduct";
import ProductPage from "./pages/product";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="contact" element={<div>Contact Page</div>} />
      <Route path="product">
        <Route element={<ProductPage />} index />
        <Route path=":productID" element={<SingleProductPage />} />
      </Route>
    </Routes>
  );
}
