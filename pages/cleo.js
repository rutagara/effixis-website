import Header from '../components/header'
import StandardLayout from '../components/standard-layout'
import { Row, Col, Container, ResponsiveEmbed, Media } from 'react-bootstrap'
import ContactForm from '../components/contact-form'

const CleoHeader = () => (
  <Header dividerColor="white" currentPage="cleo" overflow="show">
    <Row>
      <Col lg={6} xs={12} id="catchline" className="px-5 text-light">
        <h1 className="display-4">Welcome Cleo &trade;</h1>
        <p>The best software solution for your analytical needs</p>
        <span className="design-line"></span>
      </Col>

    </Row>

    <img id="cleo-big-logo" className="d-xl-block d-none" src="/images/illustrations/macbook-with-product.png"></img>
  </Header>
)

const Introduction = () => (
  <section id="introduction" className="bg-white standard-section">
      <Container> 
        <div id="introduction-title" className="text-center px-5 mb-5">
          <h5>SST Market &amp; Credit risk ?</h5>
          <h1 className="my-3 text-primary font-weight-bold">We make it easy for you !</h1>
          <p>Breakthrough product, intuitive, answers all your problems &amp; questions.</p>
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
  <section id="steps" className="bg-light standard-section">
    <Container>
      <div id="introduction-title" className="text-center px-5 mb-5">
        <h1 className="my-3">Cleo&trade; is easy as 1-2-3 !</h1>
      </div>
      <Row>
        <Col lg={7} xs={12} className="p-5 d-flex align-items-center">
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
          </ResponsiveEmbed>
        </Col>
        <Col lg={5} xs={12} className="p-5">
          <Media className="p-3">
            <img width={64} className="mr-4" src="/images/illustrations/input.svg"/>
            <Media.Body>
              <h5>1. Input</h5>
              <p>
                Input excel data directly from your custodian.
              </p>
            </Media.Body>
          </Media>
          <Media className="p-3">
            <img width={64} className="mr-4" src="/images/illustrations/evaluation.svg"/>
            <Media.Body>
              <h5>2. Evaluate</h5>
              <p>
                See SST ratio &amp; figures. Download SST template for Finma reporting. Instantaneously.
              </p>
            </Media.Body>
          </Media>
          <Media className="p-3">
            <img width={64} className="mr-4" src="/images/illustrations/analysis.svg"/>
            <Media.Body>
              <h5>3. Analyse</h5>
              <p>
                What if? Portfolio reallocation, solvency scenarios, exact contribution of each instrument 
                to the capital...
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
    <ContactForm></ContactForm>
  </StandardLayout>
)

export default Cleo;