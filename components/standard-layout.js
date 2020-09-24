import Head from 'next/head'
import Footer from '../components/footer'

const StandardLayout = (props) => (
  <>
    <Head>
      <title>Effixis SA | {props.title}</title>
      <link rel="icon" type="image/png" href="/images/brand/favicon-32x32.png"/>
    </Head>
    {props.children}
    <Footer></Footer>
  </>
)

export default StandardLayout;