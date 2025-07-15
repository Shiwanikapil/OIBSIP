const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (temporarily store data)
const orders = [];
const payments = [];

// Root route
app.get('/', (req, res) => {
  res.send('🍕 Pizza Backend Server is running!');
});

// Order route
app.post('/api/order', (req, res) => {
  const { name, address, phone, pizza } = req.body;

  orders.push({ name, address, phone, pizza });  // Save order in memory

  console.log('📦 New Order Received:');
  console.log(`👤 Name: ${name}`);
  console.log(`📍 Address: ${address}`);
  console.log(`📞 Phone: ${phone}`);
  console.log(`🍕 Pizza: ${pizza}`);
  console.log(`----------------------------------`);

  res.status(200).json({ message: 'Order received successfully!' });
});

// Payment route
app.post('/api/payment', (req, res) => {
  const { paymentMethod, upiID, time } = req.body;

  payments.push({ paymentMethod, upiID, time });  // Save payment in memory

  console.log(`💳 Payment Received:`);
  console.log(`💰 Method: ${paymentMethod}`);
  console.log(`🔢 UPI ID: ${upiID}`);
  console.log(`⏰ Time: ${time}`);
  console.log(`----------------------------------`);

  res.status(200).json({ success: true, message: 'Payment processed successfully' });
});

// ✅ GET route to view all orders
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// ✅ GET route to view all payments
app.get('/api/payments', (req, res) => {
  res.json(payments);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});