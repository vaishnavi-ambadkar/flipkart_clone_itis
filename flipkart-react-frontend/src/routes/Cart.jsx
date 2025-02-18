// import CartItems from "../components/CartItems";
// import CartSummary from "../components/CartSummary";
// import { useSelector } from "react-redux";
// import Header from "../components/Header";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const items = useSelector((state) => state.items);
//   const finalItems = items.filter((item) => {
//     const itemIndex = cartItems.indexOf(item.id);
//     return itemIndex >= 0;
//   });
//   return (
//     <>
//       <Header />
//       <main>
//         <div className="cart-page">
//           <div className="cart-items-container">
//             {finalItems.map((item) => (
//               <CartItems items={item} key={item.id} />
//             ))}
//           </div>
//           <CartSummary />
//         </div>
//       </main>
//     </>
//   );
// };
// export default Cart;
// import CartItems from "../components/CartItems";
// import CartSummary from "../components/CartSummary";
// import { useSelector } from "react-redux";
// import Header from "../components/Header";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const items = useSelector((state) => state.items);
//   const finalItems = items.filter((item) => {
//     const itemIndex = cartItems.indexOf(item.id);
//     return itemIndex >= 0;
//   });

//   const navigate = useNavigate(); // Hook for navigation

//   const handlePlaceOrder = async () => {
//     // Logic to place the order
//     // This is a placeholder for your order placement logic
//     const orderResponse = await placeOrder(finalItems); // Assume this function places the order

//     if (orderResponse.success) {
//       // Navigate to the placed order page
//       navigate("/placed-order"); // Ensure this matches the route defined
//     } else {
//       // Handle error
//       alert("Failed to place order");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="cart-page">
//           <div className="cart-items-container">
//             {finalItems.map((item) => (
//               <CartItems items={item} key={item.id} />
//             ))}
//           </div>
//           <CartSummary />
//           <button onClick={handlePlaceOrder} style={styles.button}>
//             Place Order
//           </button>
//         </div>
//       </main>
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

// export default Cart;
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useSelector } from "react-redux";
// import CartItems from "../components/CartItems";
// import CartSummary from "../components/CartSummary";
// import Header from "../components/Header";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const items = useSelector((state) => state.items);
//   const finalItems = items.filter((item) => cartItems.includes(item.id));
//   const navigate = useNavigate(); // Hook for navigation

//   const handlePlaceOrder = async () => {
//     // Logic to place the order
//     const orderResponse = await placeOrder(finalItems); // Assume this function places the order

//     if (orderResponse.success) {
//       // Navigate to the placed order page
//       navigate("/placed-order"); // Ensure this matches the route defined
//     } else {
//       // Handle error
//       alert("Failed to place order");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="cart-page">
//           <div className="cart-items-container">
//             {finalItems.map((item) => (
//               <CartItems items={item} key={item.id} />
//             ))}
//           </div>
//           <CartSummary />
//           <button onClick={handlePlaceOrder} style={styles.button}>
//             Place Order
//           </button>
//         </div>
//       </main>
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

// export default Cart;
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useSelector } from "react-redux";
// import CartItems from "../components/CartItems";
// import CartSummary from "../components/CartSummary";
// import Header from "../components/Header";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const items = useSelector((state) => state.items);
//   const finalItems = items.filter((item) => cartItems.includes(item.id));
//   const navigate = useNavigate(); // Hook for navigation

//   const handlePlaceOrder = async () => {
//     // Logic to place the order
//     const orderResponse = await placeOrder(finalItems); // Assume this function places the order

//     if (orderResponse.success) {
//       // Navigate to the placed order page
//       navigate("/placed-order"); // Ensure this matches the route defined
//     } else {
//       // Handle error
//       alert("Failed to place order");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="cart-page">
//           <div className="cart-items-container">
//             {finalItems.map((item) => (
//               <CartItems items={item} key={item.id} />
//             ))}
//           </div>
//           <CartSummary />
//           <button onClick={handlePlaceOrder} style={styles.button}>
//             Place Order
//           </button>
//         </div>
//       </main>
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

// export default Cart;
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useSelector } from "react-redux";
// import CartItems from "../components/CartItems";
// import CartSummary from "../components/CartSummary";
// import Header from "../components/Header";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const items = useSelector((state) => state.items);
//   const finalItems = items.filter((item) => cartItems.includes(item.id));
//   const navigate = useNavigate(); // Hook for navigation

//   const handlePlaceOrder = async () => {
//     // Logic to place the order
//     const orderResponse = await placeOrder(finalItems); // Call the placeOrder function

//     if (orderResponse.success) {
//       // Navigate to the placed order page
//       navigate("/placed-order"); // Ensure this matches the route defined
//     } else {
//       // Handle error
//       alert("Failed to place order");
//     }
//   };

//   // Place Order Function
//   const placeOrder = async (items) => {
//     try {
//       const response = await fetch("http://localhost:5000/api/place-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ items }), // Send the items to the server
//       });

//       const data = await response.json();
//       return { success: response.ok, data }; // Return success status and data
//     } catch (error) {
//       console.error("Error placing order:", error);
//       return { success: false }; // Return failure status
//     }
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="cart-page">
//           <div className="cart-items-container">
//             {finalItems.map((item) => (
//               <CartItems items={item} key={item.id} />
//             ))}
//           </div>
//           <CartSummary />
//           <button onClick={handlePlaceOrder} style={styles.button}>
//             Place Order
//           </button>
//         </div>
//       </main>
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

// export default Cart;
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useSelector } from "react-redux";
// import CartItems from "../components/CartItems";
// import CartSummary from "../components/CartSummary";
// import Header from "../components/Header";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart);
//   const items = useSelector((state) => state.items);
//   const finalItems = items.filter((item) => cartItems.includes(item.id));
//   const navigate = useNavigate(); // Hook for navigation

//   const handlePlaceOrder = async () => {
//     // Logic to place the order
//     const orderResponse = await placeOrder(finalItems); // Call the placeOrder function

//     if (orderResponse.success) {
//       // Navigate to the placed order page
//       navigate("/place-order"); // Ensure this matches the route defined
//     } else {
//       // Handle error
//       alert("Failed to place order");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <div className="cart-page">
//           <div className="cart-items-container">
//             {finalItems.map((item) => (
//               <CartItems items={item} key={item.id} />
//             ))}
//           </div>
//           <CartSummary />
//           <button onClick={handlePlaceOrder} style={styles.button}>
//             Place Order
//           </button>
//         </div>
//       </main>
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

// export default Cart;
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";
import Header from "../components/Header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => cartItems.includes(item.id));
  const navigate = useNavigate(); // Hook for navigation

  const placeOrder = async (items) => {
    try {
      const response = await fetch("https://flipkart-clone-itis-api.vercel.app/api/place-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map(item => item.id), // Assuming items is an array of item objects
          userId: JSON.parse(localStorage.getItem("user"))._id, // Assuming user ID is stored in local storage
        }),
      });

      const data = await response.json();
      return { success: response.ok, data }; // Return success status and data
    } catch (error) {
      console.error("Error placing order:", error);
      return { success: false }; // Return failure status
    }
  };

  const handlePlaceOrder = async () => {
    const orderResponse = await placeOrder(finalItems); // Call the placeOrder function

    if (orderResponse.success) {
      // Navigate to the new placed order page
      navigate("/order-success"); // Ensure this matches the new route
    } else {
      // Handle error
      alert("Failed to place order");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="cart-page">
          <div className="cart-items-container">
            {finalItems.map((item) => (
              <CartItems items={item} key={item.id} />
            ))}
          </div>
          <CartSummary />
          <button onClick={handlePlaceOrder} style={styles.button}>
            Place Order
          </button>
        </div>
      </main>
    </>
  );
};

// Optional styles for the button
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
};

export default Cart;
