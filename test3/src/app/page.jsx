//'use client'// client component
import Image from 'next/image'
import styles from './page.module.css'
import img1 from '@/../public/image1.jpg'
import Button from './(components)/Button'

export default function Home() {
  // const handleclick=()=>{
  //   alert("hello")
  // }
  return (
    <>
    <h1>Image component</h1>
    <img src={img1.src} alt="" />
    <Image
    src={img1}
    alt='sample'
    style={{width:"100%", objectFit:"cover"}}
    />

    <Image
    src={"https://plus.unsplash.com/premium_photo-1671683371481-274255273c37?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    alt='sample'
    width={200}
    height={200}
    />

    <h3>Server Components vs Client Components</h3>
    {/* <button onClick={handleclick}>Click here</button> */}
    <Button/>
    </>
  )
}
