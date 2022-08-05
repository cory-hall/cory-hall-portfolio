import { Link } from 'react-scroll'

function Header() {

  return (
    <div className="headerComp w-full flex items-center justify-center">
      <div className='flex items-center justify-center'>
        <Link
          className='pageLink'
          to='aboutSection'
          spy={true}
          smooth={true}
          duration={500}>
          About
        </Link>
        <Link
          className='pageLink'
          to='skillsSection'
          spy={true}
          smooth={true}
          duration={500}>
          Skills
        </Link>
        <Link
          className='pageLink'
          to='projectSection'
          spy={true}
          smooth={true}
          duration={500}>
          Projects
        </Link>
        <Link
          className='pageLink'
          to='contactSection'
          spy={true}
          smooth={true}
          duration={500}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header;