import { Link } from 'react-scroll'

import upArrow from '../assets/images/scroll-up-50.png'

function Projects() {

  return (
    <section className='projectsPage' id='projectSection'>
      <div className='flex justify-end w-full'>
        <Link
          className='pageLink'
          to='landingSection'
          spy={true}
          smooth={true}
          duration={500}>
          <img src={upArrow} alt='up arrow'></img>
        </Link>
      </div>
      <p>PROJECTS</p>
    </section>
  )
}

export default Projects;