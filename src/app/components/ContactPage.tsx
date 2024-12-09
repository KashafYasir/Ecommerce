import React from 'react';
import '../styles/ContactPage.css'

const ContactPage: React.FC = () => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.header}>Get In Touch With Us</h1>
      <p style={styles.subHeader}>For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      <div style={styles.contentContainer}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <form style={formStyles.form}>
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label} htmlFor="name">Your name</label>
        <input style={formStyles.input} type="text" id="name" name="name" placeholder="Abc" />
      </div>
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label} htmlFor="email">Email address</label>
        <input style={formStyles.input} type="email" id="email" name="email" placeholder="Abc@def.com" />
      </div>
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label} htmlFor="subject">Subject</label>
        <input style={formStyles.input} type="text" id="subject" name="subject" placeholder="This is an optional" />
      </div>
      <div style={formStyles.inputGroup}>
        <label style={formStyles.label} htmlFor="message">Message</label>
        <textarea style={formStyles.textarea} id="message" name="message" placeholder="Hi! I'd like to ask about"></textarea>
      </div>
      <button style={formStyles.button} type="submit">Submit</button>
    </form>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div style={infoStyles.container}>
      <div style={infoStyles.section}>
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1XYiu4ZL_Fz8lv3" alt="Address Icon" width="22" height="28" style={infoStyles.icon} />
        <div>
          <h3 style={infoStyles.title}>Address</h3>
          <p style={infoStyles.text}>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>
      <div style={infoStyles.section}>
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1XYiu4ZL_Fz8lv4" alt="Phone Icon" width="30" height="30" style={infoStyles.icon} />
        <div>
          <h3 style={infoStyles.title}>Phone</h3>
          <p style={infoStyles.text}>Mobile: (+84) 546-6789</p>
          <p style={infoStyles.text}>Hotline: (+84) 456-6789</p>
        </div>
      </div>
      <div style={infoStyles.section}>
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1XYiu4ZL_Fz8lv5" alt="Working Time Icon" width="23" height="23" style={infoStyles.icon} />
        <div>
          <h3 style={infoStyles.title}>Working Time</h3>
          <p style={infoStyles.text}>Monday-Friday: 9:00 - 22:00</p>
          <p style={infoStyles.text}>Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center' as 'center',
    padding: '40px 20px',
  },
  header: {
    fontSize: '32px',
    fontWeight: 600,
    marginBottom: '10px',
  },
  subHeader: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#666',
    marginBottom: '40px',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  },
};

const formStyles = {
  form: {
    maxWidth: '635px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
    fontFamily: 'Poppins',
    color: '#000000',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    fontFamily: 'Poppins',
    borderRadius: '10px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    fontFamily: 'Poppins',
    borderRadius: '10px',
    border: '1px solid #ccc',
    minHeight: '120px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    fontFamily: 'Poppins',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#b5854d',
    color: '#fff',
    cursor: 'pointer',
    width: '237px',
    alignSelf: 'center',
  },
};

const infoStyles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    color: '#000',
    width: '393px',
    height: '537px',
    padding: '20px',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    marginRight: '10px',
  },
  title: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '36px',
    margin: 0,
  },
  text: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    margin: 0,
  },
};

export default ContactPage;

