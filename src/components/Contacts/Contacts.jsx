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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Section>
      <Container>
        <LeftContent>
          <Form onSubmit={handleSubmit}>
            <FormTitle>Contact Us</FormTitle>
            <Input type="text" placeholder="Name" />
            <Input type="email" name="" id="" placeholder="Email" />
            <TextArea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write your message"
            ></TextArea>
            <ButtonForm type="submit">Send</ButtonForm>
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
