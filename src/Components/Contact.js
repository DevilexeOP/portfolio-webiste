import React, { useState } from "react";
import "../Styles/contact.css";
import { db } from "../firebase";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setLoader(true);

    db.collection("contact")
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        alert("Message has been sent");
        // setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        // setLoader(false);
      });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

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
          onSubmit={handleSubmit}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-3">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="col">
              <input
                type="subject"
                placeholder="Subject"
                id="subject"
                className="form-control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <textarea
              name="textarea"
              id="textArea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              Message
            </textarea>
          </div>
          <button
            type="submit"
            id="button"
            style={{
              background: loader ? "#FFB800" : "#ccc",
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Contact;
