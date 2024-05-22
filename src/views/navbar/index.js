import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function HeadNavbar() {
  return (
      <Navbar expand = "lg" className="bg-body-tertiary">
        <Container >
          <Navbar.Brand href="#">Facebook Posts</Navbar.Brand>
        </Container>
      </Navbar>
  );

}



export default HeadNavbar;

