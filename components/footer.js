import { Container, Col, Row, Nav, Media } from 'react-bootstrap'
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <section id="footer" className="bg-light standard-section">
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
{/*           <Nav.Item>
                  <Nav.Link className="pl-0" href="/sst-on-demand">SST On-Demand</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                  <Nav.Link className="pl-0" href="/about-us">About Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col lg={4} className="p-5">
            <h4 className="mb-4">Contact us</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Media>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon"/> 
                  <Media.Body>
                    Aegeristrasse 7, 6300 Zug, Switzerland
                  </Media.Body>
                </Media>
              </li>
              <li className="mb-3">
                <a href="mailto:contact@effixis.ch">
                  <Media>
                    <FontAwesomeIcon icon={faEnvelope} className="footer-icon"/>
                    <Media.Body>
                      contact@effixis.ch
                    </Media.Body>
                  </Media>
                </a>
              </li>
              <li className="media mb-3">
                <a href="https://www.linkedin.com/company/effixis" target="_blank">
                  <Media>
                    <FontAwesomeIcon icon={faLinkedin} className="footer-icon"/>
                    <Media.Body>
                      Follow us on linkedin
                    </Media.Body>
                  </Media>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
);

export default Footer;