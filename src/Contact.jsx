// Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const contactInfo = {
    email: "mdzade007@gmail.com",
    phone: "+91-8481025140",
    linkedin: "mohammed-zaid-694550328",
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    alert("Thank you for your message!");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container section-wrapper">
        <h2 className="display-6 fw-bold text-center mb-4">Contact</h2>

        <div className="section-title-underline"></div>

        <div className="row g-4">
          {/* Contact info */}
          <div className="col-md-5">
            <div className="inner-card h-100">
                <h3 className="h5 mb-3">Get In Touch</h3>
                <p className="mb-2">
                  <FaEnvelope className="me-2" />
                  {contactInfo.email}
                </p>
                <p className="mb-2">
                  <FaPhone className="me-2" />
                  {contactInfo.phone}
                </p>
                <div className="d-flex gap-2 mt-3">
                  <a
                    href={"https://www.linkedin.com/in/${contactInfo.linkedin}"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <FaLinkedin className="me-1" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark btn-sm"
                  >
                    <FaGithub className="me-1" />
                    GitHub
                  </a>
                </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-md-7">
            <div className="inner-card h-100">
                <h3 className="h5 mb-3">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;