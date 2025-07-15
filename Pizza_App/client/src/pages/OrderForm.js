// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// function OrderForm() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const selectedPizza = location.state?.pizza;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !address || !phone) {
//       alert('Please fill all fields!');
//       return;
//     }

//     navigate('/PaymentPage', {
//       state: {
//         pizza: selectedPizza,
//         name,
//       },
//     });
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Delivery Details</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={styles.input}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Delivery Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           style={styles.input}
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           style={styles.input}
//           required
//         />
//         <button type="submit" style={styles.button}>Confirm Order</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     backgroundColor: '#fff3e0',
//     minHeight: '100vh',
//     padding: '40px',
//     textAlign: 'center',
//     fontFamily: 'Segoe UI, sans-serif',
//   },
//   heading: {
//     color: '#d84315',
//     marginBottom: '20px',
//     fontSize: '2rem',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   input: {
//     margin: '10px',
//     padding: '12px',
//     width: '280px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//   },
//   button: {
//     padding: '12px 24px',
//     backgroundColor: '#e53935',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     fontWeight: 'bold',
//     marginTop: '15px',
//     cursor: 'pointer',
//   },
// };

// export default OrderForm;

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function OrderForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPizza = location.state?.pizza;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !address || !phone) {
      alert('Please fill all fields!');
      return;
    }

    // 🚀 Send data to backend
    try {
      const response = await fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          address,
          phone,
          pizza: selectedPizza?.name || 'Not specified',
        }),
      });

      if (response.ok) {
        console.log('Order submitted to server');
      } else {
        console.error('Failed to submit order');
      }
    } catch (err) {
      console.error('Error:', err);
    }

    // 🎯 Continue to payment page
    navigate('/PaymentPage', {
      state: {
        pizza: selectedPizza,
        name,
      },
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Delivery Details</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Confirm Order</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff3e0',
    minHeight: '100vh',
    padding: '40px',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    color: '#d84315',
    marginBottom: '20px',
    fontSize: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin: '10px',
    padding: '12px',
    width: '280px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#e53935',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    marginTop: '15px',
    cursor: 'pointer',
  },
};

export default OrderForm;