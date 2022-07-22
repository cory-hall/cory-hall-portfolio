import Image from 'next/image'
import Link from 'next/link';

import portPic from '../public/portPicBNW.png'

export default function Home() {
  return (
    <section className='homeDiv flex'>
      <div className='mobileView flex flex-col items-center'>
        <div className='flex justify-evenly w-full mt-4 mb-12'>
          <Link href='/about'>
            <a className='mobileLinkText'>About Me</a>
          </Link>
          <Link href='/projects'>
            <a className='mobileLinkText'>My Projects</a>
          </Link>
          <Link href='/contact'>
            <a className='mobileLinkText'>Contact Me</a>
          </Link>
        </div>
        <p className='mobileHeadText'>Hello.<br></br> My name is Cory</p>
        <div className='flex items-center justify-center w-1/2 h-full'>
          <Image
            src={portPic}
            objectFit='contain'
          >

          </Image>
        </div>
      </div>

      <div className='desktopView w-full flex'>
        <div className='linksDiv flex flex-col justify-center w-1/2 h-full'>
          <div className=''>
            <Link href='/about'>
              <p className='text-9xl w-full'><a className='w-full' href='/about' data-replace='About Me'><span>Hello</span></a> </p>
            </Link>
          </div>

          <div>
            <Link href='/projects'>
              <a className="projectsLink before:content-['My_Name']"></a>
            </Link>
          </div>

          <div>
            <Link href='/contact'>
              <a className="contactLink before:content-['Is_Cory']"></a>
            </Link>
          </div>
        </div>

        <div className='flex justify-center w-1/3 h-full mr-8'>
          <Image
            src={portPic}
            objectFit='contain'
          >

          </Image>
        </div>
      </div>
    </section>
  )
}
