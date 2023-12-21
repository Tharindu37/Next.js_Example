import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <ul>
      <li><Link className={styles.link} href="/">Home</Link></li>
      <li><Link className={styles.link} href="/services">Services</Link></li>
      <li><Link className={styles.link} href="/products">Products</Link></li>
      <li><Link className={styles.link} href="/contact">Contact Us</Link></li>
      <li><Link className={styles.link} href="/about/branches">Branches</Link></li>
      <li><Link className={styles.link} href="/products/vegis">Vegis page</Link></li>
    </ul>

    <Link id={styles.specialLink} href="https://nextjs.org/" target='_blank'>NextJS Site</Link>
    </>
  )
}
