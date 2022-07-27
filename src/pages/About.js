import { Link } from 'react-scroll'

function About() {

  return (
    
    <section className='aboutPage' id='aboutSection'>
      <div>
      <Link
          className='pageLink'
          to='landingSection'
          spy={true}
          smooth={true}
          duration={500}>
          Back To Top
        </Link>
      </div>
      <p>ABOUT ME</p>
    </section>
  )
}

export default About;