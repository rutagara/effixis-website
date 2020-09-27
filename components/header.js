import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = (props) => (
  <section id="header" className={"bg-gradient overflow-" + props.overflow}>
    <Container fluid id="header-container" className="large-container">
      <Navbar expand="xl" className="py-5 navbar-dark">

        <Navbar.Brand className="" href="/">
          <img id="header-logo" src="images/brand/logo_white_text.svg" alt="logo"></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ml-auto" activeKey={"/" + props.currentPage}>
            <Nav.Link className="p-3" href="/">Home</Nav.Link>
            <Nav.Link className="p-3" href="/cleo">Cleo&trade;</Nav.Link>
            <Nav.Link className="p-3" href="/software-development">Software Development</Nav.Link>
            <Nav.Link className="p-3" href="/sst-on-demand">SST On-Demand</Nav.Link>
            <Nav.Link className="p-3" href="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {props.children}

    </Container>

    <div className="custom-shape-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={"shape-fill-" + props.dividerColor}></path>
      </svg>
    </div>
  </section>
);

Header.defaultProps = {
  dividerColor: 'white',
  overflow: 'hidden'
}

export default Header;


