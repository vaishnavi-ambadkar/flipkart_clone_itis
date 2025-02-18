// const Footer = () => {
//   return (
//     <footer className="footer_container">
//       <div className="footer_info">
//         <h2>Flipkart</h2>
//       </div>
//       <div className="footer_contacts">
//         <p>&copy; {new Date().getFullYear()} Flipkart. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2874f0', // Flipkart's primary color
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const footerInfoStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const footerLinksStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '1200px', // Limit the width
    marginBottom: '20px',
  };

  const footerSectionStyle = {
    flex: 1,
    margin: '0 10px',
  };

  const footerSectionTitleStyle = {
    marginBottom: '10px',
  };

  const footerListStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const footerListItemStyle = {
    margin: '5px 0',
  };

  const footerLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const footerLinkHoverStyle = {
    textDecoration: 'underline',
  };

  const footerContactsStyle = {
    textAlign: 'center',
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerInfoStyle}>
        <h2>Shopify</h2>
        <p>Explore the world of Shopify</p>
      </div>
      <div style={footerLinksStyle}>
        <div style={footerSectionStyle}>
          <h3 style={footerSectionTitleStyle}>About Us</h3>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}><a href="/about" style={footerLinkStyle}>Company</a></li>
            <li style={footerListItemStyle}><a href="/careers" style={footerLinkStyle}>Careers</a></li>
            <li style={footerListItemStyle}><a href="/press" style={footerLinkStyle}>Press</a></li>
            <li style={footerListItemStyle}><a href="/blog" style={footerLinkStyle}>Blog</a></li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={footerSectionTitleStyle}>Customer Service</h3>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}><a href="/help" style={footerLinkStyle}>Help Center</a></li>
            <li style={footerListItemStyle}><a href="/returns" style={footerLinkStyle}>Returns</a></li>
            <li style={footerListItemStyle}><a href="/shipping" style={footerLinkStyle}>Shipping</a></li>
            <li style={footerListItemStyle}><a href="/contact" style={footerLinkStyle}>Contact Us</a></li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={footerSectionTitleStyle}>Follow Us</h3>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}><a href="/facebook" style={footerLinkStyle}>Facebook</a></li>
            <li style={footerListItemStyle}><a href="/twitter" style={footerLinkStyle}>Twitter</a></li>
            <li style={footerListItemStyle}><a href="/instagram" style={footerLinkStyle}>Instagram</a></li>
            <li style={footerListItemStyle}><a href="/linkedin" style={footerLinkStyle}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div style={footerContactsStyle}>
        <p>&copy; {new Date().getFullYear()} Flipkart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;