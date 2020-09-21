import { Container, Col, Row, Nav } from 'react-bootstrap'
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <section id="footer" className="bg-light">
      <Container fluid className="large-container">
        <Row>
          <Col lg={4} xs={12} className="p-5">

            <img id="logo" src='/images/brand/logo.svg' className="mb-5" height="40" alt="logo"></img>

            <p className="text-muted">&copy; Copyright 2020, Effixis SA</p>
            
          </Col>
          <Col lg={4} xs={12} className="p-5">
            <h4 className="mb-4">Effixis SA</h4>
            <Nav defaultActiveKey="/" className="flex-column">
              <Nav.Item>
                  <Nav.Link className="pl-0" href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link className="pl-0" href="/cleo">Cleo&trade;</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link className="pl-0" href="/software-dev">Software Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link className="pl-0" href="/sst-on-demand">SST On-Demand</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link className="pl-0" href="/about-us">About Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col lg={4} className="p-5">
            <h4 className="mb-4">Contact us</h4>
            <ul className="list-unstyled">
              <li className="media mb-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon"/> 
                <div className="media-body">
                  Aegeristrasse 7, 6300 Zug, Switzerland
                </div>
              </li>
              <li className="media mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>
                <div className="media-body">
                  contact@effixis.ch
                </div>
              </li>
              <li className="media mb-3">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
                <div className="media-body">
                  Follow us on linkedin
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
);

export default Footer;