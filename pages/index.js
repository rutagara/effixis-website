import Header from '../components/header'
import StandardLayout from '../components/standard-layout'
import { Row, Col, Container } from 'react-bootstrap'


const HomeHeader = () => (
  <Header dividerColor="light" currentPage="">
    <Row>
      <Col lg={6} xs={12} id="catchline" className="px-5 text-light">
        <h1 className="display-4">Simple solutions to complex problems</h1>
        <span className="design-line"></span>
      </Col>
      <img id="header-big-logo" className="d-lg-block d-none" src="/images/brand/logo-icon.svg"></img>
    </Row>
  </Header>
)

const Mission = () => (
  <section id="mission" className="bg-light standard-section">
    <Container>
      <Row className="text-dark">
        
        <Col lg={6} xs={12} className="p-5">
          <h1 className="pb-3">About the company</h1>
          <p className="pb-3">
            Effixis is a swiss based company solving computational tasks for financial institutions, regulators &amp; service providers.
          </p>
          <a className="btn btn-primary" href="about-us.html">
            Learn more about us
          </a>
        </Col>

        <Col lg={6} id="switzerland-img-container" className="d-lg-block d-none">
          <img src="/images/illustrations/switzerland.svg" id="img-switzerland"></img>
        </Col>
        
      </Row>
    </Container>
  </section>
)

const Cleo = () => (
  <section id="product" className="bg-white standard-section">
      <Container>
        <Row className="text-dark">

          <Col lg={8} xs={12} className="p-5">
            <img className="img-fluid" src="/images/illustrations/macbook-with-product.png"></img>
          </Col>

          <Col lg={4} xs={12} className="p-5">
            <h4 className="pb-3"><span className="font-weight-bold">
              Cleo &trade;</span> makes SST reporting simpler than ever
            </h4>
            <p className="pb-3">
              Contact us for a 15 minutes demonstration 
              on tablet during your coffee break.
            </p>
            <a className="btn btn-secondary" href="/contact">
              Book a Demo
            </a>
          </Col>

        </Row>
      </Container>
    </section>
)

const SoftwareDevelopment = () => (
  <section id="software-dev" className="bg-light standard-section">
    <Container>
      <Row className="text-dark">

        <Col lg={7} xs={12} className="p-5">
          <h1 className="pb-3">Software development</h1>
          <p className="pb-3">
            Do you have a software development project in mind?<br/>
            Contact us to establish an attractive partnership.
          </p>
          <a className="btn btn-primary" href="/software-development#contact-form">
            Contact us
          </a>
        </Col>

        <Col lg={5} id="software-dev-icon-with-gear" className="p-5 d-lg-block d-none">
          <img className="img-fluid" src="/images/brand/logo_icon_with_gear.svg"></img>
        </Col>

      </Row>
    </Container>
  </section>
)

const SstOnDemand = () => {
  React.useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const distance = window.scrollY;
      console.log(distance);
      document.querySelector("#iphone-chat").style.transform = `translateY(${- distance * 0.5 + 1100}px)`;
    });
  }, []);

  return (
    <section id="sst-on-demand" className="bg-white standard-section">
      <Container>
        <Row className="text-dark">

          <Col lg={5} xs={12} className="p-5">
            <h1 className="pb-3">SST on-demand</h1>
            <p className="pb-3">
              Our simple &amp; convenient service allows you to get 
              your market and credit risk ready on-demand.
            </p>
            <ul className="pb-3">
              <li>Flat fee</li>
              <li>Fast delivery</li>
              <li>Custom reporting</li>
            </ul>
            <a className="btn btn-primary" href="contact.html">
              Contact us
            </a>
          </Col>

          <Col lg={7} id="sst-on-demand-iphone-chat" className="p-5 d-lg-block d-none">
              <img id="iphone-chat" src="/images/illustrations/iphone-chat.svg"></img>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

const Partners = () => (
  <section id="partners" className="bg-gradient standard-section">
    <Container>
      <Row className="text-light">

        <Col lg={6} className="col-lg-6 p-5 d-flex align-items-center">
          <h1>Meet our partners</h1>
        </Col>
        <Col lg={3} xs={6} className="col-lg-3 p-5 d-flex align-items-center justify-content-start">
          <img id="azenes" className="img-fluid" src="/images/partners/azenes.svg"></img>
        </Col>
        <Col lg={3} xs={6} className="p-5 d-flex align-items-center justify-content-start">
            <img id="volada" className="img-fluid" src="/images/partners/volada-white.svg"></img>
        </Col>
        
      </Row>
    </Container>
  </section>
)   

const Home = () => {
  return (
    <StandardLayout title='Home'>
      <HomeHeader></HomeHeader>
      <Mission></Mission>
      <Cleo></Cleo>
      <div id="smart-group">
        <SoftwareDevelopment></SoftwareDevelopment>
        <SstOnDemand></SstOnDemand>
      </div>
      <Partners></Partners>
    </StandardLayout>
  )
}

export default Home;