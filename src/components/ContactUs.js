import React from "react";

function ContactUs() {
  return (
    <>
      <section id="contactUs">
        <div className="container">
          <article id="main-col">
            <h1 className="page-title">Services</h1>
            <ul id="services">
              <li>
                <h3>Coffee Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus mi augue, viverra sit amet ultricies at, vulputate id
                  lorem. Nulla facilisi.
                </p>
                <p>Pricing: $1,000 - $3,000</p>
              </li>
              <li>
                <h3>Coffee Maintenance</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <p>Pricing: $250 per month</p>
              </li>
              <li>
                <h3>Coffee Cost</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <p>Pricing: $25 per month</p>
              </li>
            </ul>
          </article>

          <aside id="sidebar">
            <div className="dark">
              <h3>Contact Us</h3>
              <form className="contactForm">
                <div>
                  <label>First Name</label>
                  <br />
                  <input type="text" placeholder="first name" />
                </div>
                <div>
                  <label>Last Number</label>
                  <br />
                  <input type="text" placeholder="last name" />
                </div>
                <div>
                  <label>Email</label>
                  <br />
                  <input type="email" placeholder="Emial Address" />
                </div>
                <div>
                  <label>Phone Number</label>
                  <br />
                  <input type="number" placeholder="Phone Number" />
                </div>
                <div>
                  <label>Address</label>
                  <br />
                  <textarea placeholder="address"></textarea>
                </div>
                <div>
                  <label>Message</label>
                  <br />
                  <textarea placeholder="Message"></textarea>
                </div>
                <button className="button" type="submit">
                  Send
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
