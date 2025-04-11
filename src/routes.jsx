import { Routes, Route, Outlet, Link, NavLink } from "react-router";
import HomePage from "./pages/homePage";
import SingleProductPage, {
  OverviewPage,
  ReviewPage,
} from "./pages/product/signleProduct";
import ProductPage from "./pages/product";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<div>Contact Page</div>} />
        <Route path="product">
          <Route element={<ProductPage />} index />
          <Route path=":productID" element={<SingleProductPage />}>
            <Route path="review" element={<ReviewPage />} />
            <Route index element={<OverviewPage />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="login" element={<div>Login Page</div>} />
      <Route path="register" element={<div>Register Page</div>} />
    </Routes>
  );
}

export function UserLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/product",
    name: "Product",
  },
];
export function Navbar() {
  console.log("Navbar");
  return (
    <div>
      <div>Navbar</div>
      <div className="space-x-2">
        {links.map(({ name, path }) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-50"
            }
            key={path}
            to={path}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  console.log("Footer");
  return (
    <div>
      <div>Footer</div>
    </div>
  );
}
