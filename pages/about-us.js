import Header from '../components/header'
import StandardLayout from '../components/standard-layout'
import { Row, Col, Container, Media } from 'react-bootstrap'
import { TagCloud } from 'react-tagcloud'

const AboutUsHeader = () => (
  <Header currentPage="about-us">
    <Row>
      <Col lg={6} xs={12} id="catchline" className="px-5 text-light">
        <h1 className="display-4">Simple solutions to complex problems</h1>
        <p>We are solving computational tasks for financial institutions, regulators &amp; service providers.</p>
        <span className="design-line"></span>
      </Col>
    </Row>
    <img id="header-big-logo" className="d-lg-block d-none" src="/images/brand/logo-icon.svg"></img>
  </Header>
)

const TrackRecord = () => {

  let toMedia = (item, index) => (
    <Media className="mb-3">
      <img className="mr-2" src="/images/illustrations/circle-list.svg" height="24px"></img>
      <Media.Body>
        {item}
      </Media.Body>
    </Media>
  )

  let problemItems = [
    "Swiss Solvency Test (SST): FINMA's risk-based solvency capital requirement regulation.",
    "A mandatory yearly requirement for Swiss-licensed insurers.",
    "Complex modeling of market, credit and insurance risks based on Monte-Carlo simulations.",
    "Diverse reporting use cases."
  ].map(toMedia)

  let solutionItems = [
    "Used by more than 100 insurance companies & FINMA",
    "No bugs, no necessary support and maintenance in at least than 2 years",
    "Completed in less than 5 months",
    "Immediately adopted by the market"
  ].map(toMedia)

  return (
    <section id="track-record" className="standard-section">
      <Container>
        <div className="text-center px-5 mb-5">
          <h1 className="mb-3">Our Track Record: the SST Tool</h1>
          <p className="">We are best known for our very first project, the SST Tool. We developed this software on the behalf
            of FINMA, the Swiss Financial Market Supervisor Authority.</p>
        </div>
        <Row className="py-4">
          <Col lg={6} xs={12} className="p-5">
            <div className="mb-5">
              <h3 className="font-weight-bold text-muted">Problem</h3>
              <p>Introduce a new computational solvency regulatory model for Swiss insurers.</p>
            </div>
            {problemItems}
          </Col>
          <Col lg={6} xs={12} className="p-5">
            <div className="mb-5">
              <h3 className="font-weight-bold text-primary">Our Solution</h3>
              <p>A simple software solution allowing each insurer to compute and report its solvency capital.</p>
            </div>
            {solutionItems}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const Comparison = () => {
  return (
    <section id="comparison" className="standard-section bg-white">
      <Container fluid className="">
        <Row className="justify-content-between">
          <Col lg={6} xs={12} className="pr-3 pl-0 py-3">
            <div id="vendors-cons-container" className="bg-light text-dark d-flex justify-content-end w-100">
              <div id="vendors-cons" className="p-5">
                <h3 className="mb-4">Traditional Vendors</h3>
                <Media className="mb-3">
                  <img className="mr-4 mt-2" src="/images/illustrations/minus-gradient.svg" width="24px"></img>
                  <Media.Body>
                    <h5 className="mt-0">Huge fit-for-all infrastructures.</h5>
                    <p>Implementation, consulting &amp; training overhead.</p>
                  </Media.Body>
                </Media>
                <Media className="mb-3">
                  <img className="mr-4 mt-2" src="/images/illustrations/minus-gradient.svg" width="24px"></img>
                  <Media.Body>
                    <h5 className="mt-0">Long-term locking licenses.</h5>
                    <p>Reduced agility.</p>
                  </Media.Body>
                </Media>
              </div>
            </div>
          </Col>
          <Col lg={6} xs={12} className="pl-3 pr-0 py-3">
            <div id="effixis-pros-container" className="bg-gradient text-light d-flex justify-content-start w-100">
              <div id="effixis-pros" className="p-5">
                <h3 className="mb-4">Effixis</h3>
                <Media className="mb-3">
                  <img className="mr-4" src="/images/illustrations/plus-white.svg" width="24px"></img>
                  <Media.Body>
                    <h5 className="mt-0">Targeted &amp; intuitive apps and modules.</h5>
                    <p>Teaches itself, get going now.</p>
                  </Media.Body>
                </Media>
                <Media className="mb-3">
                  <img className="mr-4" src="/images/illustrations/plus-white.svg" width="24px"></img>
                  <Media.Body>
                    <h5 className="mt-0">No commitment, we bet on quality.</h5>
                    <p>Move fast.</p>
                  </Media.Body>
                </Media>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const Expertise = () => {
  const tags = [
    { value: 'Monte-Carlo', count: 5 },
    { value: 'Greeks', count: 7 },
    { value: 'Sensitivities', count: 10 },
    { value: 'CVAs', count: 5 },
    { value: 'xVAs', count: 6 },
    { value: 'Regulation', count: 8 },
    { value: 'ALM', count: 9 },
    { value: 'Derivatives', count: 4 },
    { value: 'NLP', count: 5 },
    { value: 'Calibration', count: 6 },
    { value: 'Volatility Surfaces', count: 4 },
    { value: 'Curve fitting', count: 5 },
    { value: 'AI', count: 6 },
    { value: 'Machine Learning', count: 7 },
    { value: 'Real-time analytics', count: 12 },
    { value: 'Large scale apps', count: 6 },
    { value: 'Docker', count: 5 },
    { value: 'Distributed computing', count: 6 },
    { value: 'Low-level optimization', count: 5 },
    { value: 'Automatic Adjoint Differentiation (AAD)', count: 7 },
    { value: 'Investment management processes', count: 5 },
    { value: 'Fundamental analysis', count: 5 },
    { value: 'Option Trading', count: 9 },
    { value: 'Hedging', count: 6 },
    { value: 'User Interfaces (UI)', count: 5 },
    { value: 'Cloud', count: 6 },
    { value: 'Capital requirement management', count: 8 },
    { value: 'Capital optimization', count: 5 },
    { value: 'Capital management', count: 7 },
    { value: 'Economic Scenario Generators', count: 5 },
    { value: 'Pricing', count: 10 },
    { value: 'FX overlay', count: 6 },
    { value: 'Financial data', count: 5 },
    { value: 'Financial APIs', count: 7 },
    { value: 'Scala', count: 9 },
    { value: 'Java', count: 5 },
    { value: 'C', count: 6 },
    { value: 'C++', count: 4 },
    { value: 'R', count: 7 },
    { value: 'Python', count: 5 },
    { value: 'React.js', count: 7 },
    { value: 'Next.js', count: 6 },
    { value: 'Node.js', count: 6 }
  ]

  let colorOptions = {
    hue : '#66589F',
    luminosity: 'dark'
  }

  return (
    <section id="expertise" className="text-dark standard-section bg-light">
      <Container>
        <h1 className="mb-3 px-5 text-center">Our expertise</h1>
        <TagCloud className="p-5 text-center" tags={tags} minSize={12} maxSize={35} shuffle={false} colorOptions={colorOptions}/>
      </Container>

    </section>
  )
}

const Team = () => {
  let toTeamItem = (info) => (
    <Col lg={4} xs={12} className="p-5">
      <img src={"/images/team/" + info.id + ".png"} className="team-member-picture mb-3"></img>
      <h4>{info.fullName}</h4>
      <p>{info.title}</p>
    </Col>
  )
  let teamItems = [
    { id: 'melvin', fullName: 'Melvin Kianmanesh Rad', title: 'CEO'},
    { id: 'adrien', fullName: 'Adrien Lamit', title: 'CTO'},
    { id: 'loris', fullName: 'Loris Michel', title: 'Scientist'},
    { id: 'joe', fullName: 'Pr. Joe Peppard', title: 'Principal research scientist @ MIT Sloan'},
    { id: 'roger', fullName: 'Dr. Roger Meli', title: 'Head of risk & regulation @ Azenes AG'},
  ].map(toTeamItem)

  return (
    <section id="team" className="standard-section bg-white">
      <Container>
        <div className="mb-3 px-5 text-center">
          <h1 className="mb-2">Meet our team</h1>
          <p>Founders &amp; Advisors</p>
        </div>
        <Row>
          {teamItems}
        </Row>
      </Container>

    </section>
  )
}

const AboutUs = () => (
  <StandardLayout title="About Us">
    <AboutUsHeader></AboutUsHeader>
    <TrackRecord></TrackRecord>
    <Comparison></Comparison>
    <Expertise></Expertise>
    <Team></Team>
  </StandardLayout>
)

export default AboutUs;
