import {
  NavLink,
  Outlet,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage, { useCheckAuth } from "./pages/LoginPage";
import ProductPage from "./pages/product";
import SingleProductPage, {
  OverviewPage,
  ReviewPage,
} from "./pages/product/signleProduct";
import CartPage from "./pages/cartPage";

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
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="login" element={<LoginPage />} />
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
  {
    path: "/cart",
    name: "Cart",
  },
];
export function Navbar() {
  const { handleLogout, isLoggedIn } = useCheckAuth();
  console.log("Navbar");

  return (
    <div>
      <div>Navbar</div>
      <div className="space-x-2">
        {links.map(({ name, path }) => (
          <NavLink
            viewTransition
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-gray-50"
            }
            key={path}
            to={path}
          >
            {name}
          </NavLink>
        ))}
        {isLoggedIn ? (
          <div>
            <p>welcome back</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
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
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "product",

        children: [
          {
            index: true,
            element: <ProductPage />,
          },
          {
            path: ":productID",
            element: <SingleProductPage />,
            children: [
              {
                path: "review",
                element: <ReviewPage />,
              },
              {
                index: true,
                element: <OverviewPage />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <div>Register Page</div>,
  },
]);
