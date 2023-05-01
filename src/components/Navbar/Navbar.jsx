import {
  Button,
  Conatiner,
  Icon,
  Icons,
  Links,
  List,
  ListItem,
  Logo,
  Section,
} from "./Navbar.styled";

const Navbar = () => {
  return (
    <Section>
      <Conatiner>
        <Links>
          <Logo>Logo</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contacts</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon>🔎</Icon>
          <Button>Click</Button>
        </Icons>
      </Conatiner>
    </Section>
  );
};

export default Navbar;
