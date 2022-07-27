import { Link } from 'react-scroll'

function Header() {

  return (
    <div className="headerComp w-full flex items-center justify-end">
      {/* <div className='flex w-1/6'>
        <Link
          className='pageLink'
          to='landingSection'
          spy={true}
          smooth={true}
          duration={500}>
          Back to Top
        </Link>
      </div> */}
      <div className='flex justify-end'>
        <Link
          className='pageLink'
          to='aboutSection'
          spy={true}
          smooth={true}
          duration={500}>
          About Me
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
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default Header;