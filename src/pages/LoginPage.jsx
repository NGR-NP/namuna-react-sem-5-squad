// import { useReducer } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("password", username);
    console.log("password", password);
    e.target.reset();
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
