import Header from '../components/header'
import StandardLayout from '../components/standard-layout'
import { Row, Col, Container } from 'react-bootstrap'

const SoftwareDevelopmentHeader = () => (
  <Header>
    <div id="big-ampersand">
      &amp;
    </div>
  </Header>
)



const Partnerships = () => {
  let subjects = [
    {
      title: "Asset and Liability Management (ALM)", 
      content: "Develop ALM strategies that are adapted to today's financial and regulatory environments."
    },
    {
      title: "Tied Assets", 
      content: "Manage and automate FINMA's tied assets regulation within the same framework as the SST."
    },
    {
      title: "Solvency II", 
      content: "Incorporate Solvency II wihin the framwork"
    },
    {
      title: "Trade Recommandation", 
      content: "Customized trade recommandation systems based on regulatory, risk and strategic asset allocation requirements."
    },
    {
      title: "Trade Execution", 
      content: "Easily execute trades for your strategies without management fees through third party APIs."
    },
    {
      title: "Regulatory Technologies (REGTECH)", 
      content: "Innovative and automated solutions for specific regulations."
    },
    {
      title: "Risk Models", 
      content: "Incorporate your own risk models and develop new pragmatic multi-year risk models."
    },
    {
      title: "Client Reporting",
      content: "Improve and simplify the reporting of complex topics to increase customer satisfaction."
    }
  ];

  let items = subjects.map(s => (
    <Col lg={6} xs={12} className="media px-5 py-4">
      <img className="mr-2" src="/images/illustrations/circle-list.svg" height="24px"></img>
      <div className="media-body">
        <h5 className="mt-0">{s.title}</h5>
        {s.content}
      </div>
    </Col>
  ));

  return (
    <section id="partnerships" className="bg-white">
      <Container> 
        <div id="partnership-title" className="text-center mb-5">
          <h1 className="pb-3 text-muted font-weight-bold">Have an idea ?</h1>
          <p>Our product development is driven by collaboration.</p>
          <p>Contact us for highly attractive development partnerships !</p>
        </div>
        <Row className="py-5">
          {items}
        </Row>
      </Container>
    </section>
  )
}

const Home = () => (
  <StandardLayout title='Home'>
    <SoftwareDevelopmentHeader></SoftwareDevelopmentHeader>
    <Partnerships></Partnerships>
  </StandardLayout>
)

export default Home;