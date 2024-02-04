// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// function Login() {
//   const history = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       await axios
//         .post("http://localhost:8000/", {
//           email,
//           password,
//         })
//         .then((res) => {
//           if (res.data == "exist") {
//             history("/home", { state: { id: email } });
//           } else if (res.data == "notexist") {
//             alert("User have not sign up");
//           }
//         })
//         .catch((e) => {
//           alert("wrong details");
//           console.log(e);
//         });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div className="flex justify-center">
//       <div className="flex flex-col  p-20  items-start h-96  justify-evenly ">
//         <span className="rounded text-slate-900 text-sm  mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
//           Login to EduMate
//         </span>
//         <div className="text-start my-4">
//           <span className="text-2xl">Create an Account</span>
//           <p>Don't have an account?</p>
//           <Link to="/register" className="font-bold underline">
//             Sign up
//           </Link>
//         </div>
//         <form action="POST">
//           <span>
//             <label htmlFor="username" className="h-screen">
//               Username :
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="username"
//               required
//               minlength="4"
//               maxlength="18"
//               size="10"
//               className=" rounded	"
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </span>
//           <span>
//             {" "}
//             <label htmlFor="password">Password :</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="password"
//               required
//               minlength="8"
//               maxlength="18"
//               size="10"
//               className="	rounded"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </span>

//           <span>
//             <input
//               type="submit"
//               onClick={submit}
//               className="mt-4 p-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300"
//             >
//               Login
//             </input>
//           </span>
//         </form>
//       </div>
//       <div>
//         <img src="heroimg.png" alt="" />
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submit = () => {
    // Redirect to "/Profile" after successful login
    return <Navigate to="/Profile" />;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        formData
      );

      if (response.data === "success") {
        alert("Login successful");
        // Redirect or handle success as needed
      } else if (response.data === "failure") {
        alert("Invalid credentials");
      }
    } catch (error) {
      //console.error("Error during login:", error);
      //alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="flex  flex-wrap bg-gradient-to-b from-blue-500 to-slate-50 justify-center items-center">
        <div className="flex flex-col p-8 sm:p-12 md:p-16 lg:p-20 items-start sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
          <span className="rounded text-slate-900 text-sm mb-4 p-4 w-4/5 bg-gradient-to-r from-blue-300 200 border">
            Login to EduMate
          </span>
          <div className="text-start my-4">
            <span className="text-2xl">Create an Account</span>
            <p>Don't have an account?</p>
            <Link
              to="/register"
              className="rounded text-slate-900 text-sm mb-4 p-1 bg-gradient-to-r from-blue-300 hover:underline font-bold"
            >
              Sign up
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              minlength="4"
              maxlength="18"
              size="10"
              className=" rounded	m-2 "
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              minLength="8"
              maxLength="18"
              size="10"
              className="rounded m-1"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="mt-4 p-4 rounded bg-blue-600 text-slate-50 hover:bg-indigo-700 hover:text-stone-300"
            >
              <Link to="/profile">Login</Link>
            </button>
          </form>
        </div>
        <div className=" sm:block ">
          {/* Show the image only on screens wider than small (sm) and position it to the left */}
          <img src="heroimg.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
