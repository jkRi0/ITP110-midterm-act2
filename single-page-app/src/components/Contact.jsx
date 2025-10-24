import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>

      <div className="card">
        <p>Need help or feedback? Reach us through any of the following:</p>
        <ul>
          <li><strong>Email:</strong> contact@simple-spa.com</li>
          <li><strong>Phone:</strong> +63 912 345 6789</li>
          <li><strong>Address:</strong> 123 React Street, Calamba City, Laguna, Philippines</li>
        </ul>

        <p>Follow us on:</p>
        <ul>
          <li><strong>Facebook:</strong> facebook.com/SimpleSPA</li>
          <li><strong>Twitter:</strong> twitter.com/SimpleSPA</li>
          <li><strong>Instagram:</strong> instagram.com/SimpleSPA</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
