import Head from 'next/head';
import Wrapper from './Wrapper.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

export default ({ children, title = 'Potcake Place' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>
      { children }
    </main>

    <Footer>
      Footer
    </Footer>
  </Wrapper>
)
