
// import { Link } from "react-router-dom";
// import Header from "../components/Header";
// import { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const loginData = { email, password };

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         // Redirect to another page or perform other actions
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div style={styles.container}>
//         <div style={styles.loginInfo}>
//           <h4 style={styles.loginTitle}>Login</h4>
//           <p style={styles.loginDescription}>
//             Get access to your Orders, Wishlist and Recommendations
//           </p>
//           <img
//             src={"../images/fl.png"}
//             alt="flipkart-login"
//             style={styles.loginImage}
//           />
//         </div>
//         <div style={styles.loginCred}>
//           <label htmlFor="emailInput" style={styles.label}>
//             Enter Login Credentials
//           </label>
//           <br />
//           <input
//             type="email"
//             id="emailInput"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <br />
//           <input
//             type="password"
//             id="passwordInput"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <p style={styles.statement}>
//             By continuing, you agree to Flipkart's{" "}
//             <a href="#" style={styles.link}>Terms of Use</a> and{" "}
//             <a href="#" style={styles.link}>Privacy Policy</a>.
//           </p>
//           <button
//             className="login-button"
//             onClick={handleLogin}
//             style={styles.button}
//           >
//             Login
//           </button>
//           <div style={styles.createAccount}>
//             New to Flipkart?
//             <Link to="/create-account" style={styles.link}> Create an Account </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   },
//   loginInfo: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   loginTitle: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#2874f0",
//   },
//   loginDescription: {
//     fontSize: "16px",
//     color: "#555",
//   },
//   loginImage: {
//     width: "150px",
//     marginTop: "10px",
//   },
//   loginCred: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     width: "300px",
//     textAlign: "left",
//   },
//   label: {
//     fontSize: "18px",
//     marginBottom: "10px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   statement: {
//     fontSize: "14px",
//     color: "#777",
//     margin: "10px 0",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#2874f0",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   createAccount: {
//     marginTop: "15px",
//     fontSize: "14px",
//     color: "#555",
//   },
//   link: {
//     color: "#2874f0",
//     textDecoration: "none",
//   },
// };

// export default LoginPage;
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// import Header from "../components/Header";
// import { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Hook for navigation

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const loginData = { email, password };

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         // Store user data in local storage or context
//         localStorage.setItem("user", JSON.stringify(data.user)); // Example of storing user data
//         navigate("/placed-order"); // Redirect to the order page
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div style={styles.container}>
//         <div style={styles.loginInfo}>
//           <h4 style={styles.loginTitle}>Login</h4>
//           <p style={styles.loginDescription}>
//             Get access to your Orders, Wishlist and Recommendations
//           </p>
//           <img
//             src={"../images/fl.png"}
//             alt="flipkart-login"
//             style={styles.loginImage}
//           />
//         </div>
//         <div style={styles.loginCred}>
//           <label htmlFor="emailInput" style={styles.label}>
//             Enter Login Credentials
//           </label>
//           <br />
//           <input
//             type="email"
//             id="emailInput"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <br />
//           <input
//             type="password"
//             id="passwordInput"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={styles.input}
//           />
//           <p style={styles.statement}>
//             By continuing, you agree to Flipkart's{" "}
//             <a href="#" style={styles.link}>Terms of Use</a> and{" "}
//             <a href="#" style={styles.link}>Privacy Policy</a>.
//           </p>
//           <button
//             className="login-button"
//             onClick={handleLogin}
//             style={styles.button}
//           >
//             Login
//           </button>
//           <div style={styles.createAccount}>
//             New to Flipkart?
//             <Link to="/create-account" style={styles.link}> Create an Account </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   },
//   loginInfo: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   loginTitle: {
//     fontSize: "24px",
//     fontWeight: "bold",
//     color: "#2874f0",
//   },
//   loginDescription: {
//     fontSize: "16px",
//     color: "#555",
//   },
//   loginImage: {
//     width: "150px",
//     marginTop: "10px",
//   },
//   loginCred: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     width: "300px",
//     textAlign: "left",
//   },
//   label: {
//     fontSize: "18px",
//     marginBottom: "10px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "16px",
//   },
//   statement: {
//     fontSize: "14px",
//     color: "#777",
//     margin: "10px 0",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#2874f0",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   createAccount: {
//     marginTop: "15px",
//     fontSize: "14px",
//     color: "#555",
//   },
//   link: {
//     color: "#2874f0",
//     textDecoration: "none",
//   },
// };

// export default LoginPage;
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Header from "../components/Header";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch("https://flipkart-clone-itis-api.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Store user data in local storage or context
        localStorage.setItem("user", JSON.stringify(data.user)); // Example of storing user data
        navigate("/"); // Redirect to the home page after successful login
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
      <div style={styles.container}>
        <div style={styles.loginInfo}>
          <h4 style={styles.loginTitle}>Login</h4>
          <p style={styles.loginDescription}>
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <img
            src={"../images/fl.png"}
            alt="flipkart-login"
            style={styles.loginImage}
          />
        </div>
        <div style={styles.loginCred}>
          <label htmlFor="emailInput" style={styles.label}>
            Enter Login Credentials
          </label>
          <br />
          <input
            type="email"
            id="emailInput"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <br />
          <input
            type="password"
            id="passwordInput"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <p style={styles.statement}>
            By continuing, you agree to Flipkart's{" "}
            <a href="#" style={styles.link}>Terms of Use</a> and{" "}
            <a href="#" style={styles.link}>Privacy Policy</a>.
          </p>
          <button
            className="login-button"
            onClick={handleLogin}
            style={styles.button}
          >
            Login
          </button>
          <div style={styles.createAccount}>
            New to Flipkart?
            <Link to="/create-account" style={styles.link}> Create an Account </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  loginInfo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  loginTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2874f0",
  },
  loginDescription: {
    fontSize: "16px",
    color: "#555",
  },
  loginImage: {
    width: "150px",
    marginTop: "10px",
  },
  loginCred: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "left",
  },
  label: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  statement: {
    fontSize: "14px",
    color: "#777",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2874f0",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  createAccount: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#2874f0",
    textDecoration: "none",
  },
};

export default LoginPage;
