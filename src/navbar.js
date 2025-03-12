import {Navbar,Nav,Container,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../src/css/nav.css';

export default function Navigation(){
    return(<>
  
 {/* <Nav defaultActiveKey="/home" as="ul"  fill variant="tabs" id="nav">

  
      <Nav.Item as="li"  >
        <Nav.Link id="nav-list" href="#/create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="nav-list" href="#/deposit">Deposit</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="nav-list" href="#/withdraw" >WithDraw</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link id="nav-list" href="#/alldata">Alldata</Nav.Link>
      </Nav.Item>
    </Nav> */}

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link href="#/create">Create</Nav.Link>
            <Nav.Link href="#/deposit">Deposite</Nav.Link>
            <Nav.Link href="#/withdraw">Withdraw</Nav.Link>
            <Nav.Link href="#/alldata">Alldata</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>)
}