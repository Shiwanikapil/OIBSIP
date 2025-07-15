import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Page imports
 import Home from './pages/Home';
 import Login from './pages/Login';
import SignUp from './pages/SignUp';
 import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import OrderSummary from './pages/OrderSummary';
import OrderForm from './pages/OrderForm';
import PaymentPage  from './pages/PaymentPage';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderList from './pages/OrderList';


 function App() {
  return (
    <Router>
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/dashboard" element={<Dashboard />}/>
         <Route path="/menu" element={<Menu />} />
         <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
         <Route path="/orderconfirmation" element={<OrderConfirmation />} />
         <Route path="/orderlist" element={<OrderList />} />
       </Routes>
     </Router>
   );
 }

 export default App;


