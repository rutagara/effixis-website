import Header from '../components/header'
import StandardLayout from '../components/standard-layout'
import ContactForm from '../components/contact-form'
import { Row, Col, Container, Media } from 'react-bootstrap'

const SoftwareDevelopmentHeader = () => (
  <Header dividerColor="white" currentPage="software-development">
    <div id="big-ampersand" className="text-light font-weight-bold">
      &amp;
    </div>
  </Header>
)

const Partnerships = () => {
  let subjects = [
    {
      title: "Regulatory Technologies",
      content: "For insurers, bankers and asset managers. SST, Solvency II, Tied Assets, Mifid II, ISDA SIMM, FRTB, Basel Regulations."
    },
    {
      title: "Asset and Liability Management (ALM)",
      content: "Develop ALM strategies that are adapted to today's financial and regulatory environments."
    },
    {
      title: "Trade Recommandation",
      content: "Customized trade recommandation systems based on regulatory, risk and strategic requirements."
    },
    {
      title: "Trade Execution",
      content: "Easily execute trades for your strategies without management fees through third party APIs."
    },
    {
      title: "Risk Models",
      content: "Your own pragmatic risk models."
    },
    {
      title: "Risk Management",
      content: "Compute risk KPIs such as sensitivities, CVAs & exposures in real-time."
    },
    {
      title: "Client Reporting",
      content: "Improve and simplify the reporting of complex topics to increase customer satisfaction."
    },
    {
      title: "Analytics",
      content: "Make use of Machine Learning and AI to support decision making."
    }
  ];

  let items = subjects.map((s, index) => (
    <Col lg={6} xs={12} key={index} className="media px-5 py-4">
      <Media>
        <img className="mr-2" src="/images/illustrations/circle-list.svg" height="24px"></img>
        <Media.Body>
          <h5 className="mt-0">{s.title}</h5>
          {s.content}
        </Media.Body>
      </Media>
    </Col>
  ));

  return (
    <section id="partnerships" className="bg-white standard-section">
      <Container>
        <div id="partnership-title" className="text-center px-5 mb-5">
          <h1 className="pb-3 text-primary font-weight-bold">Have an idea ?</h1>
          <p>Our product development is driven by collaboration.</p>
          <p>Contact us for highly attractive development partnerships !</p>
        </div>
        <Row className="py-4">
          {items}
        </Row>
      </Container>
    </section>
  )
}

const SoftwareDevelopment = () => (
  <StandardLayout title='Software Development'>
    <SoftwareDevelopmentHeader></SoftwareDevelopmentHeader>
    <Partnerships></Partnerships>
    {/* <ContactForm></ContactForm> */}
  </StandardLayout>
)

export default SoftwareDevelopment;
