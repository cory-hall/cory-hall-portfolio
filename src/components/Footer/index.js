import { Link } from "react-scroll";

import upArrow from '../../assets/images/scroll-up-50.png'

function Footer() {

  return (
    <div className="footerComp flex items-center justify-between w-full">
        <h1 className="footerText pl-4">Made By Cory Hall</h1>
        <Link
          className='pageLink footerLink'
          to='landingSection'
          spy={true}
          smooth={true}
          duration={500}>
          <img src={upArrow} alt='up arrow'></img>
        </Link>
    </div>
  )
}

export default Footer;