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
  // ModalContent,
} from "./modalka.styled";

export const ModalkaEN = ({ setOpenModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  useEffect(() => {}, [formData]);

  const handleCloseModal = () => {
    setOpenModal(false);
    document.body.style.position = 'unset'
    window.scrollTo(0, 0);
  };

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
          <CloseButton to="/" onClick={handleCloseModal}>
            <img src={ButtonClose} alt="Button" />
          </CloseButton>
          <TitleHTwo>
            Contact <TitleSpan>Us</TitleSpan>
          </TitleHTwo>
          <Paragraph>
            We'll help you find the right plan and pricing for your business.
          </Paragraph>
          <form onSubmit={handleSubmit} >
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
            <SubmitButton type="submit">Send</SubmitButton>
          </form>
        </ImgContainer>
      </ModalWrapper>
    </main>
  );
};
