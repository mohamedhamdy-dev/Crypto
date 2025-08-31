import { About } from './About';
import { Features } from './Features';
import { GetStarted } from './GetStarted';
import Header from './Header';
import { Home } from './Home';
import { LearnFrom } from './LearnFrom';
import { LearnMore } from './LearnMore';
import SeparationLine from './SeparationLine';
import { WhyCrypto } from './WhyCrypto';
import './index.css';

export default function App() {
  return (
    <div className=" bg-primary text-white ">
      <Header />
      <SeparationLine />
      <Home />
      <SeparationLine />
      <About />
      <SeparationLine />
      <Features />
      <GetStarted />
      <LearnMore />
      <SeparationLine />
      <LearnFrom />
      <WhyCrypto />
    </div>
  );
}
