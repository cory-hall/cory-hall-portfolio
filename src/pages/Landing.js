import Particles from "react-particles";
import { loadFull } from 'tsparticles';

import options from '../utils/particles.json'

function Landing() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <section className='landingPage' id='landingSection'>
      <Particles
        height="90vh"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <h1 className="landingText font-black">Hello,<br></br> My name is Cory.</h1>
    </section>
  )
}

export default Landing;