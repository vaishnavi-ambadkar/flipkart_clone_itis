// import { Link } from "react-router-dom";
// import Header from "../components/Header";

// const PlacedOrderPage = () => {
//   return (
//     <>
//       <Header />
//       <div className="placedOrder">
//         <h3 className="notPlaced">Order Not Placed!</h3>
//         Sorry! We can't Proceed Your request at this time Kindly
//         <Link to="/login-page"> Login </Link> to place order.
//         <br />
//         <img
//           src={"../images/sademo.png"}
//           alt="Order error image"
//           id="orderImage"
//         />
//       </div>
//     </>
//   );
// };
// export default PlacedOrderPage;

// import { Link } from "react-router-dom";
// import Header from "../components/Header";

// const PlacedOrderPage = () => {
//   const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from local storage

//   return (
//     <>
//       <Header />
//       <div className="placedOrder">
//         {user ? (
//           <h3 className="orderPlaced">Order Placed Successfully!</h3>
//         ) : (
//           <>
//             <h3 className="notPlaced">Order Not Placed!</h3>
//             Sorry! We can't proceed with your request at this time. Kindly
//             <Link to="/login-page"> Login </Link> to place an order.
//             <br />
//             <img
//               src={"../images/sademo.png"}
//               alt="Order error image"
//               id="orderImage"
//             />
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default PlacedOrderPage;
// 
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
// import Header from "../components/Header";

// const PlacedOrderPage = () => {
//   const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from local storage
//   const navigate = useNavigate(); // Hook for navigation

//   // Function to handle navigation back to home
//   const handleGoHome = () => {
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <>
//       <Header />
//       <div className="placedOrder">
//         {user ? (
//           <>
//             <h3 className="orderPlaced">Order Placed Successfully!</h3>
//             <button onClick={handleGoHome} style={styles.button}>
//               Go to Home
//             </button>
//           </>
//         ) : (
//           <>
//             <h3 className="notPlaced">Order Not Placed!</h3>
//             <p>
//               Sorry! We can't proceed with your request at this time. Kindly
//               <Link to="/login-page"> Login </Link> to place an order.
//             </p>
//             <img
//               src={"../images/sademo.png"}
//               alt="Order error image"
//               id="orderImage"
//             />
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// // Optional styles for the button
// const styles = {
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#2874f0",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "20px",
//   },
// };

// export default PlacedOrderPage;
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Header from "../components/Header";

const PlacedOrderPage = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Retrieve user data from local storage
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle navigation back to home
  const handleGoHome = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <Header />
      <div className="place_order">
        {user ? (
          <>
            <h3 className="orderPlaced">Order Placed Successfully!</h3>
            <button onClick={handleGoHome} style={styles.button}>
              Go to Home
            </button>
          </>
        ) : (
          <>
            <h3 className="notPlaced">Order Not Placed!</h3>
            <p>
              Sorry! We can't proceed with your request at this time. Kindly
              <Link to="/login-page"> Login </Link> to place an order.
            </p>
            <img
              src={"../images/sademo.png"}
              alt="Order error image"
              id="orderImage"
              style={styles.image} // Optional styling for the image
            />
          </>
        )}
      </div>
    </>
  );
};

// Optional styles for the button and image
const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#2874f0",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  },
  image: {
    width: "100%", // Adjust as needed
    maxWidth: "400px", // Limit the maximum width
    marginTop: "20px",
  },
};

export default PlacedOrderPage;