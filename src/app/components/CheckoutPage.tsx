import React from 'react';
import '../styles/CheckoutPage.css'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '20px',
  },
  formContainer: {
    flex: '1',
    marginRight: '20px',
  },
  summaryContainer: {
    flex: '1',
  },
};

const BillingDetailsForm: React.FC = () => {
  const styles = {
    form: {
      maxWidth: '608px',
      margin: '0 auto',
      fontFamily: 'Poppins, sans-serif',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: '54px',
      marginBottom: '35px',
      color: '#000000',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      color: '#000000',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#9f9f9f',
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#9f9f9f',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#9f9f9f',
      height: '100px',
    },
  };

  return (
    <form style={styles.form}>
      <h2 style={styles.heading}>Billing details</h2>
      <div style={styles.inputGroup}>
        <label htmlFor="firstName" style={styles.label}>First Name</label>
        <input type="text" id="firstName" name="firstName" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="lastName" style={styles.label}>Last Name</label>
        <input type="text" id="lastName" name="lastName" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="companyName" style={styles.label}>Company Name (Optional)</label>
        <input type="text" id="companyName" name="companyName" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="country" style={styles.label}>Country / Region</label>
        <select id="country" name="country" style={styles.select}>
          <option value="Sri Lanka">Sri Lanka</option>
        </select>
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="streetAddress" style={styles.label}>Street address</label>
        <input type="text" id="streetAddress" name="streetAddress" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="city" style={styles.label}>Town / City</label>
        <input type="text" id="city" name="city" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="province" style={styles.label}>Province</label>
        <select id="province" name="province" style={styles.select}>
          <option value="Western Province">Western Province</option>
        </select>
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="zipCode" style={styles.label}>ZIP code</label>
        <input type="text" id="zipCode" name="zipCode" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="phone" style={styles.label}>Phone</label>
        <input type="text" id="phone" name="phone" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="email" style={styles.label}>Email address</label>
        <input type="email" id="email" name="email" style={styles.input} />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="additionalInfo" style={styles.label}>Additional Information</label>
        <textarea id="additionalInfo" name="additionalInfo" style={styles.textarea} />
      </div>
    </form>
  );
};

const OrderSummary: React.FC = () => {
  const styles = {
    container: {
      fontFamily: 'Poppins, sans-serif',
      maxWidth: '608px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '15px',
      backgroundColor: '#fff',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 500,
    },
    productRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      fontSize: '16px',
      fontWeight: 400,
    },
    totalRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      fontWeight: 700,
      fontSize: '24px',
      color: '#b88e2f',
    },
    paymentOption: {
      marginBottom: '20px',
      fontSize: '16px',
      fontWeight: 300,
      color: '#9f9f9f',
    },
    privacyText: {
      fontSize: '16px',
      fontWeight: 300,
      color: '#000',
      marginBottom: '20px',
    },
    button: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#fff',
      border: '1px solid #000',
      borderRadius: '15px',
      cursor: 'pointer',
      fontSize: '20px',
      fontWeight: 400,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span>Product</span>
        <span>Subtotal</span>
      </div>
      <div style={styles.productRow}>
        <span>Asgaard sofa x 1</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div style={styles.productRow}>
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div style={styles.totalRow}>
        <span>Total</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div style={styles.paymentOption}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input type="radio" name="payment" checked style={{ marginRight: '10px' }} />
          <span>Direct Bank Transfer</span>
        </div>
        <p>
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input type="radio" name="payment" style={{ marginRight: '10px' }} />
          <span>Cash On Delivery</span>
        </div>
      </div>
      <p style={styles.privacyText}>
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" style={{ color: '#000', textDecoration: 'underline' }}>privacy policy</a>.
      </p>
      <button style={styles.button}>
        Place order
      </button>
    </div>
  );
};

const CheckoutPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <BillingDetailsForm />
      </div>
      <div style={styles.summaryContainer}>
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;

