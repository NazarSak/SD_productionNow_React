import React, { useState } from "react";
import { TitleHTwo, TitleSpan, Paragraph } from "./modalka.styled";

export const ModalkaEN = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data (e.g., send to backend, etc.)
    console.log("Form data:", formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };

  return (
    <main>
      <TitleHTwo>
        Contact <TitleSpan>Us</TitleSpan>
      </TitleHTwo>
      <Paragraph>
        We'll help you find the right plan and pricing for your business.
      </Paragraph>
      return (
      <form onSubmit={handleSubmit} style={{ width: "545px" }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
