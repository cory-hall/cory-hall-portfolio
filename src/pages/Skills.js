import { Link } from 'react-scroll'

import upArrow from '../assets/images/scroll-up-50.png'

function Skills() {

  return (
    
    <section className='skillsPage flex flex-col' id='skillsSection'>
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
      <p>SKILLS</p>
    </section>
  )
}

export default Skills;