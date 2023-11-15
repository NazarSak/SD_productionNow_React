import React, { useState, useEffect } from "react";
import ButtonClose from "../../assets/svg/emailPage/Close.svg";
import {
  TitleHTwo,
  TitleSpan,
  Paragraph,
  Input,
  InputComment,
  List,
  SubmitButton,
  ImgContainer,
  CloseButton,
  ModalWrapper,
} from "./modalka.styled";

export const ModalkaDE = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  useEffect(() => {}, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://iasasc.centralindia.cloudapp.azure.com:8088/api/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        console.log("Form data:", userData);

        setFormData({
          name: "",
          email: "",
          comment: "",
        });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <ModalWrapper>
        <ImgContainer>
          <CloseButton to="/de">
            <img src={ButtonClose} alt="Button" />
          </CloseButton>
          <TitleHTwo>
            Kontaktiere <TitleSpan>Uns</TitleSpan>
          </TitleHTwo>
          <Paragraph>
            Wir helfen Ihnen, den richtigen Plan und Preis für Ihr Unternehmen
            zu finden.
          </Paragraph>
          return (
          <form onSubmit={handleSubmit} style={{ width: "545px" }}>
            <List>
              <li>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </li>
              <li>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </li>
              <li>
                <InputComment
                  id="comment"
                  name="comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                />
              </li>
            </List>
            <SubmitButton type="submit">Schicken</SubmitButton>
          </form>
        </ImgContainer>
      </ModalWrapper>
    </main>
  );
};
