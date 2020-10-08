import Header from '../components/header'
import StandardLayout from '../components/standard-layout'
import { Row, Col, Container, ResponsiveEmbed, Media } from 'react-bootstrap'
import ContactForm from '../components/contact-form'

const CleoHeader = () => (
  <Header dividerColor="light" currentPage="cleo" overflow="show">
    <Row>
      <Col lg={6} xs={12} id="catchline" className="px-5 text-light">
        <h1 className="display-4">Welcome Cleo </h1>
        <p>The simplest way to compute, understand &amp; manage your SST.</p>
        <span className="design-line"></span>
      </Col>
    </Row>

    <img id="cleo-big-logo" className="d-xl-block d-none" src="/images/illustrations/macbook-with-product.png"></img>
  </Header>
)

const Introduction = () => (
  <section id="introduction" className="bg-light standard-section">
      <Container>
        <div id="introduction-title" className="text-center px-5 mb-5">
          <h5>SST Market &amp; Credit risk</h5>
          <h1 className="my-3 text-primary font-weight-bold">Get it done in minutes!</h1>
          <p>A breakthrough for regulatory capital management. Reconciliate the SST with the investment world.</p>
        </div>
        <Row className="py-5">
          <Col lg={4} className="text-center p-3">
            <img className="standard-icon mb-4" src="/images/illustrations/risk.svg"></img>
            <h4>Risk professionals</h4>
            <p>Stop executing &amp; start analysing</p>
          </Col>
          <Col lg={4} className="text-center p-3">
            <img className="standard-icon mb-4" src="/images/illustrations/investment.svg"></img>
            <h4>Investment managers</h4>
            <p>Optimize returns &amp; (re)allocate efficiently</p>
          </Col>
          <Col lg={4} className="text-center p-3">
            <img className="standard-icon mb-4" src="/images/illustrations/decision.svg"></img>
            <h4>Decision makers</h4>
            <p>Stay up to date &amp; take informed decisions</p>
          </Col>
        </Row>
      </Container>
    </section>
)

const Steps = () => (
  <section id="steps" className="bg-white standard-section">
    <Container>
      <div id="introduction-title" className="text-center px-5 mb-5">
        <h1 className="my-3">Cleo is as easy as 1-2-3 !</h1>
      </div>
      <Row>
        {/*
        <Col lg={7} xs={12} className="p-5 d-flex align-items-center">
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
          </ResponsiveEmbed>
        </Col>
        */}
        <Col lg={4} xs={12} className="p-5">
          <Media className="p-3">
            <img width={64} className="mr-4" src="/images/illustrations/input.svg"/>
            <Media.Body>
              <h5>1. Input</h5>
              <p>
                Convenient Excel input directly from your custodian bank data.
              </p>
            </Media.Body>
          </Media>
        </Col>
        <Col lg={4} xs={12} className="p-5">
          <Media className="p-3">
            <img width={64} className="mr-4" src="/images/illustrations/evaluation.svg"/>
            <Media.Body>
              <h5>2. Evaluate</h5>
              <p>
                View your SST Ratio. Download your SST template for FINMA reporting. Instantaneously.
              </p>
            </Media.Body>
          </Media>
        </Col>
        <Col lg={4} xs={12} className="p-5">
          <Media className="p-3">
            <img width={64} className="mr-4" src="/images/illustrations/analysis.svg"/>
            <Media.Body>
              <h5>3. Analyse</h5>
              <p>
                Compare alternative allocations. Unique and simple what if & macroeconomic solvency scenarios. Exact contribution of each instrument
                to the solvency capital.
              </p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  </section>
)

const Cleo = () => (
  <StandardLayout title='Cleo'>
    <CleoHeader></CleoHeader>
    <Introduction></Introduction>
    <Steps></Steps>
    {/* <ContactForm></ContactForm> */}
  </StandardLayout>
)

export default Cleo;
