import React from "react";

function Contact() {
  return (
    <main>
      <section className="contactForm">
        <form>
          <h1>Contact to get in touch with me</h1>

          {/* Name  */}
          <div className="input-control">
            <label>Name*</label>
            <input id="namee" type="text" name="namee" />
          </div>

          {/* Email */}
          <div className="input-control">
            <label>E-mail*</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
            />
          </div>

          {/* Message */}
          <div className="input-control">
            <label>Message*</label>
            <input id="message" type="text" name="message" />
          </div>

          {/* Button */}
          <input className="btn" type="submit" value="Submit" />
        </form>
      </section>
    </main>
  );
}

export default Contact;
