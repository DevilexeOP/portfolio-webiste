import React, { useState } from "react";
import "../Styles/contact.css";

const Contact = (props) => {
  return (
    <React.Fragment>
      <section id="contact">
        <h1
          style={{
            color: "#FFB800",
          }}
          id="my-contact"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-easing="linear"
        >
          {props.contact}
        </h1>
        <div className="container">
          <h5
            style={{
              color: "white",
            }}
            id="p-10"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1200"
            data-aos-offset="0"
          >
            {props.p10}
          </h5>
          <h5
            style={{
              color: "white",
            }}
            id="p-11"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1300"
            data-aos-offset="0"
          >
            {props.p11}
          </h5>
        </div>

        <form
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1500"
          data-aos-offset="0"
        >
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                id="name"
              />
            </div>
            <div className="col-3">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="form-control"
              />
            </div>

            <div className="col">
              <input
                type="subject"
                placeholder="Subject"
                id="subject"
                className="form-control"
              />
            </div>

            <textarea name="textarea" id="textArea">
              Message
            </textarea>
          </div>
          <button type="submit" id="button">
            Send Message
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Contact;
