import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      
      <div>
        <h2>Office Address</h2>
        <p>1234 Content Avenue, Suite 567<br />
        Creativity City, CA 90210<br />
        United States</p>
      </div>

      <div>
        <h2>Phone</h2>
        <p>General Inquiries: +1 (123) 456-7890<br />
        Customer Support: +1 (987) 654-3210</p>
      </div>

      <div>
        <h2>Email</h2>
        <p>General Inquiries: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a><br />
        Support: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a><br />
        Sales: <a href="mailto:sales@yourwebsite.com">sales@yourwebsite.com</a></p>
      </div>

      <div>
        <h2>Social Media</h2>
        <p>Follow us on social media for updates and promotions:</p>
        <ul>
          <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>

      <div>
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
        Saturday: 10:00 AM - 4:00 PM<br />
        Sunday: Closed</p>
      </div>

    </div>
  );
}



export default Contact;
