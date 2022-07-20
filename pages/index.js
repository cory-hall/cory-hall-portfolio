import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import About from './about';
import Contact from './contact';
import Projects from './projects';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.homeDiv}>
      <Link href='/about'>
        <h1>Hello.</h1>
      </Link>
    </section>
  )
}
