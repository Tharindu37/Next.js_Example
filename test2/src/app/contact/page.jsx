import React from 'react'
import Link from 'next/link'
import styles from './contact.module.css'

function page() {
  return (
    <>
    <h1>Contact Us Page</h1>
    <Link className={styles.link} href="/">Home</Link>
    </>
  )
}

export default page