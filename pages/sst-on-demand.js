import Header from '../components/header'
import StandardLayout from '../components/standard-layout'
import { Row, Col, Container } from 'react-bootstrap'

const SstOnDemandHeader = () => (
  <Header currentPage="sst-on-demand">
  </Header>
)

const SstOnDemand = () => (
  <StandardLayout title='SST On-Demand'>
    <SstOnDemandHeader></SstOnDemandHeader>
  </StandardLayout>
)

export default SstOnDemand;