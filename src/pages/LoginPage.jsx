// import { useReducer } from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const reducer = (state, action) => {
//   if (action.type === "username") {
//     return { ...state, username: action.payload };
//   } else {
//     if (action.hello == "password") {
//       window.alert("insecure password");
//       return state;
//     } else {
//       return { ...state, password: action.hello };
//     }
//   }
// };
// const initialState = {
//   username: "tezz",
//   password: "dddd",
// };
// export default function LoginPage() {
//   const [formData, dispatch] = useReducer(reducer, initialState);
//   console.log("-----formData", formData);
//   return (
//     <div style={{ width: "100%", textAlign: "center" }}>
//       <h1>Login Page</h1>
//       <form>
//         <div>
//           <input
//             type="text"
//             placeholder="username"
//             value={formData.username}
//             onChange={(e) =>
//               dispatch({ type: "username", payload: e.target.value })
//             }
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="password"
//             value={formData.password}
//             onChange={(e) => dispatch({ hello: e.target.value })}
//           />
//         </div>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// }

export default function LoginPage() {
  const navigate = useNavigate();
  useCheckAuth(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("password", username);
    console.log("password", password);

    const credentials = { username, password };
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      console.log("data", data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/product");
      }
      e.target.reset();
    } catch (error) {
      console.error(error);
      throw new Error("something went wrong");
    }
  };
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="">Reset</button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export const useCheckAuth = (navigateTo = false) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hasToken = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  useEffect(() => {
    if (!hasToken) {
      if (navigateTo) {
        navigate("/login");
      }
      setIsLoggedIn(false);
    } else {
      if (navigateTo) {
        navigate("/product");
      }
      setIsLoggedIn(true);
    }
  }, [hasToken, navigate, navigateTo]);
  return { isLoggedIn, handleLogout };
};
