// import { Link } from "react-router-dom";
// import "../CreA.css";
// import Header from "../components/Header";
// const CreateAccount = () => {
//   return (
//     <>
//       <Header />
//       <div className="form-container">
//         <div className="form-content">
//           <div className="form-left">
//             <h2>Looks like you're new here!</h2>
//             <p>Sign up with your mobile number to get started</p>
//           </div>
//           <div className="form-right">
//             <form>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="fullname"
//                   name="fullname"
//                   placeholder="Enter Full Name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter Email"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   id="mobile"
//                   name="mobile"
//                   placeholder="Enter Mobile Number"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   placeholder="Enter Password"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   id="confirm-password"
//                   name="confirm-password"
//                   placeholder="Confirm Password"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <button
//                   onClick={() => {
//                     alert("Try entering a Strong Password");
//                   }}
//                 >
//                   Sign Up
//                 </button>
//               </div>
//               <div className="form-footer">
//                 Already have an account ? <Link to="/login-page"> Login </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CreateAccount;
import { Link } from "react-router-dom";
import "../CreA.css";
import Header from "../components/Header";
import { useState } from "react";

const CreateAccount = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { fullname, email, mobile, password };

    try {
      const response = await fetch("https://flipkart-clone-itis-api.vercel.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <div className="form-content">
          <div className="form-left">
            <h2>Looks like you're new here!</h2>
            <p>Sign up with your mobile number to get started</p>
          </div>
          <div className="form-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit">
                  Sign Up
                </button>
              </div>
              <div className="form-footer">
                Already have an account? <Link to="/login-page"> Login </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
