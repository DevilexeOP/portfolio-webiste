import React, { useState } from "react";
import "../Styles/contact.css";

const Contact = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // connect to firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = userData;
    if (name && email && subject && message) {
      const res = await fetch(
        "https://portfolio-new-2311b-default-rtdb.asia-southeast1.firebasedatabase.app//contactDataBase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Message sent");
      } else {
        alert("Error 404");
      }
    } else {
      alert("Error 404 , Message cannot be empty");
    }
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
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-delay="1500"
          data-aos-offset="0"
          method="POST"
        >
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                id="name"
                value={userData.name}
                onChange={postUserData}
              />
            </div>
            <div className="col-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                className="form-control"
                value={userData.email}
                onChange={postUserData}
              />
            </div>

            <div className="col">
              <input
                type="subject"
                placeholder="Subject"
                name="subject"
                id="subject"
                className="form-control"
                value={userData.subject}
                onChange={postUserData}
              />
            </div>

            <textarea
              placeholder="Message"
              name="message"
              id="textarea"
              value={userData.message}
              onChange={postUserData}
            >
              Message
            </textarea>
          </div>
          <button type="submit" id="button" onClick={submitData}>
            Send Message
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Contact;
