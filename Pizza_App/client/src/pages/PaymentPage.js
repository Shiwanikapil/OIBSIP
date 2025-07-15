//   import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function PaymentPage() {
//   const [paymentMethod, setPaymentMethod] = useState('UPI');
//   const [upiID, setUpiID] = useState('');
//   const navigate = useNavigate();

//   const handleConfirm = () => {
//     if (paymentMethod === 'UPI' && upiID.trim() === '') {
//       alert('⚠ Please enter your UPI ID to confirm!');
//       return;
//     }

//     alert('✅ Payment Successful!');
//     navigate('/orderconfirmation'); // Or wherever your confirmation page is
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>Choose Payment Method</h2>

//         <div style={styles.option}>
//           <label>
//             <input
//               type="radio"
//               value="UPI"
//               checked={paymentMethod === 'UPI'}
//               onChange={() => setPaymentMethod('UPI')}
//             />
//             Pay via UPI
//           </label>
//         </div>

//         {paymentMethod === 'UPI' && (
//           <div style={styles.upiSection}>
//             <p><strong>Pay to UPI ID:</strong> <span style={{ color: '#0077cc' }}>pizza@upi</span></p>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLzg9EVh8q2cHYZMUJzMmTYkn9MhlmjA4Dg&s"
//               alt="QR Code"
//               style={styles.qr}
//             />
//             <input
//               type="text"
//               placeholder="Enter your UPI ID"
//               value={upiID}
//               onChange={(e) => setUpiID(e.target.value)}
//               style={styles.input}
//             />
//           </div>
//         )}

//         <div style={styles.option}>
//           <label>
//             <input
//               type="radio"
//               value="Cash"
//               checked={paymentMethod === 'Cash'}
//               onChange={() => setPaymentMethod('Cash')}
//             />
//             Cash on Delivery
//           </label>
//         </div>

//         <button onClick={handleConfirm} style={styles.button}>
//           Confirm Payment
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     backgroundColor: '#e3f2fd',
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontFamily: 'Segoe UI, sans-serif',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '40px',
//     borderRadius: '16px',
//     boxShadow: '0 0 20px rgba(0,0,0,0.1)',
//     width: '380px',
//     textAlign: 'center',
//   },
//   heading: {
//     color: '#1565c0',
//     marginBottom: '20px',
//   },
//   option: {
//     marginBottom: '15px',
//     textAlign: 'left',
//   },
//   upiSection: {
//     marginBottom: '20px',
//   },
//   input: {
//     width: '100%',
//     padding: '8px',
//     marginTop: '10px',
//     borderRadius: '6px',
//     border: '1px solid #ccc',
//   },
//   qr: {
//     width: '150px',
//     margin: '10px auto',
//     display: 'block',
//   },
//   button: {
//     marginTop: '20px',
//     padding: '10px 25px',
//     backgroundColor: '#2e7d32',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
// };

// export default PaymentPage;  

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiID, setUpiID] = useState('');
  const navigate = useNavigate();

  const handleConfirm = async () => {
    if (paymentMethod === 'UPI' && upiID.trim() === '') {
      alert('⚠ Please enter your UPI ID to confirm!');
      return;
    }

    // Create payload
    const orderData = {
      paymentMethod,
      upiID: paymentMethod === 'UPI' ? upiID : 'N/A',
      time: new Date().toLocaleString(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ Payment Successful!');
        navigate('/orderconfirmation');
      } else {
        alert('❌ Failed to save payment. Try again!');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('⚠ Something went wrong during payment!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Choose Payment Method</h2>

        <div style={styles.option}>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === 'UPI'}
              onChange={() => setPaymentMethod('UPI')}
            />
            Pay via UPI
          </label>
        </div>

        {paymentMethod === 'UPI' && (
          <div style={styles.upiSection}>
            <p><strong>Pay to UPI ID:</strong> <span style={{ color: '#0077cc' }}>pizza@upi</span></p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDLzg9EVh8q2cHYZMUJzMmTYkn9MhlmjA4Dg&s"
              alt="QR Code"
              style={styles.qr}
            />
            <input
              type="text"
              placeholder="Enter your UPI ID"
              value={upiID}
              onChange={(e) => setUpiID(e.target.value)}
              style={styles.input}
            />
          </div>
        )}

        <div style={styles.option}>
          <label>
            <input
              type="radio"
              value="Cash"
              checked={paymentMethod === 'Cash'}
              onChange={() => setPaymentMethod('Cash')}
            />
            Cash on Delivery
          </label>
        </div>

        <button onClick={handleConfirm} style={styles.button}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#e3f2fd',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    width: '380px',
    textAlign: 'center',
  },
  heading: {
    color: '#1565c0',
    marginBottom: '20px',
  },
  option: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  upiSection: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  qr: {
    width: '150px',
    margin: '10px auto',
    display: 'block',
  },
  button: {
    marginTop: '20px',
    padding: '10px 25px',
    backgroundColor: '#2e7d32',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default PaymentPage;


