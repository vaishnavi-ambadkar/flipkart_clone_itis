// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   fullname: String,
//   email: { type: String, unique: true },
//   mobile: String,
//   password: String,
// });

// const User = mongoose.model('User ', userSchema);

// // Register Route
// app.post('/api/register', async (req, res) => {
//   const { fullname, email, mobile, password } = req.body;
//   try {
//     const newUser  = new User({ fullname, email, mobile, password });
//     await newUser .save();
//     res.status(201).json({ message: 'User  registered successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error registering user', error });
//   }
// });

// // Login Route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: 'Login failed' });
//     }
//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   fullname: String,
//   email: { type: String, unique: true },
//   mobile: String,
//   password: String,
// });

// const User = mongoose.model('User ', userSchema);

// // Order Schema
// const orderSchema = new mongoose.Schema({
//   items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }], // Assuming you have an Item model
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
//   createdAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// // Register Route
// app.post('/api/register', async (req, res) => {
//   const { fullname, email, mobile, password } = req.body;
//   try {
//     const newUser  = new User({ fullname, email, mobile, password });
//     await newUser .save();
//     res.status(201).json({ message: 'User  registered successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error registering user', error });
//   }
// });

// // Login Route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: 'Login failed' });
//     }
//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error });
//   }
// });

// // Place Order Route
// app.post('/api/placed-order', async (req, res) => {
//   const { items, userId } = req.body; // Expecting items and userId in the request body
//   try {
//     const newOrder = new Order({ items, user: userId });
//     await newOrder.save();
//     res.status(201).json({ message: 'Order placed successfully', order: newOrder });
//   } catch (error) {
//     res.status(400).json({ message: 'Error placing order', error });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   fullname: String,
//   email: { type: String, unique: true },
//   mobile: String,
//   password: String,
// });

// const User = mongoose.model('User ', userSchema);

// // Order Schema
// const orderSchema = new mongoose.Schema({
//   items: [{ type: String }], // Assuming items are strings (IDs)
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
//   createdAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// // Register Route
// app.post('/api/register', async (req, res) => {
//   const { fullname, email, mobile, password } = req.body;
//   try {
//     const newUser  = new User({ fullname, email, mobile, password });
//     await newUser .save();
//     res.status(201).json({ message: 'User  registered successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Error registering user', error });
//   }
// });

// // Login Route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(401).json({ message: 'Login failed' });
//     }
//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in', error });
//   }
// });

// // Place Order Route
// app.post('/api/place-order', async (req, res) => {
//   const { items, userId } = req.body; // Expecting items and userId in the request body
//   try {
//     const newOrder = new Order({ items, user: userId });
//     await newOrder.save();
//     res.status(201).json({ message: 'Order placed successfully', order: newOrder });
//   } catch (error) {
//     res.status(400).json({ message: 'Error placing order', error });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
    {
    origin:["https://flipkart-clone-itis-frontend.vercel.app"],
    methods:["POST","GET"],
    credentials:true
    }
)); 

app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
});

const User = mongoose.model('User ', userSchema); // Removed extra space in model name

// Order Schema
const orderSchema = new mongoose.Schema({
  items: [{ type: String }], // Assuming items are strings (IDs)
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' }, // Removed extra space in ref
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

// Register Route
app.post('/api/register', async (req, res) => {
  const { fullname, email, mobile, password } = req.body;
  try {
    const newUser  = new User({ fullname, email, mobile, password });
    await newUser .save();
    res.status(201).json({ message: 'User  registered successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Login failed' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

// Place Order Route
app.post('/api/place-order', async (req, res) => {
  const { items, userId } = req.body; // Expecting items and userId in the request body
  try {
    const newOrder = new Order({ items, user: userId });
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(400).json({ message: 'Error placing order', error });
  }
});
app.get("/",(req,res)=>{
    res.json("Hello");
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
