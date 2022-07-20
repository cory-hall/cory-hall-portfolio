import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className='flex flex-col flex-wrap'>
      <div className='w-auto'>
        <Link className='w-auto' href='/about'>
          <p className={styles.aboutLink + " before:content-['Hello.']"}></p>
        </Link>
      </div>

      <div>
        <Link href='/projects'>
          <h1 className={styles.projectsLink + " before:content-['My_Name']"}></h1>
        </Link>
      </div>
      <Link href='/contact'>
        <h1 className={styles.contactLink + " before:content-['Is_Cory']"}></h1>
      </Link>
    </section>
  )
}
