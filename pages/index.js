import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import styles from '../styles/Home.module.css'

import portPic from '../public/portPicBNW.png'

export default function Home() {
  return (
    <section className={styles.homeDiv + ' flex'}>

      <div className={styles.linksDiv + ' flex md:flex-col justify-center w-1/2 h-full lg:pl-24 xl:pl-48'}>
        <div>
          <Link href='/about'>
            <a className={styles.aboutLink + " w-auto before:content-['Hello']"}></a>
          </Link>
        </div>

        <div>
          <Link href='projects'>
            <a className={styles.projectsLink + " before:content-['My_Name']"}></a>
          </Link>
        </div>

        <div>
          <Link href='/contact'>
            <a className={styles.contactLink + " before:content-['Is_Cory']"}></a>
          </Link>
        </div>
      </div>

      <div className='flex justify-center w-1/2 h-full mr-8'>
        <Image
        src={portPic}
        objectFit='contain'
        >

        </Image>
      </div>
    </section>
  )
}
