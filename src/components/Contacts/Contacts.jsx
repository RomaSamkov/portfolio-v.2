import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ButtonForm,
  Container,
  Form,
  FormTitle,
  Input,
  LeftContent,
  RightContent,
  Section,
  TextArea,
} from "./Contacts.styled";

function Contacts() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cpbhlcf",
        "template_1kzao6u",
        form.current,
        "1k1C7IvbTzHhNiMhW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <LeftContent>
          <Form ref={form} onSubmit={handleSubmit}>
            <FormTitle>Contact Us</FormTitle>
            <Input type="text" placeholder="Name" name="name" />
            <Input type="email" name="email" id="" placeholder="Email" />
            <TextArea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message"
            ></TextArea>
            <ButtonForm type="submit">Send</ButtonForm>
            {success &&
              "Your message has been sent succeessfully! We will contact you as soon as possible!"}
          </Form>
        </LeftContent>
        <RightContent>
          <img src="/img/1.png" alt="" />
        </RightContent>
      </Container>
    </Section>
  );
}

export default Contacts;
