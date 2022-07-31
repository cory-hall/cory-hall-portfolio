import { Link } from "react-scroll";

import upArrow from '../../assets/images/scroll-up-50.png'

function Footer() {

  return (
    <div className="footerComp flex items-center justify-between w-full">
        <h1 className="footerText pl-12">&copy; 2022 Cory Hall</h1>
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