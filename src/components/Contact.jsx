import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>
        CONTACT <span>US</span>
      </h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-Mail" required />
        <textarea name="message" placeholder="Write Here....."></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
