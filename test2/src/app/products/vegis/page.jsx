import React from 'react'
import Link from 'next/link'

function page() {
  const vegis=[
    {
      id:1,
      veginame:"Broccoli"
    },
    {
      id:2,
      veginame: "Spinach"
    },
    {
      id:3,
      veginame: "Pumpkin"
    },
    {
      id: 4,
      veginame: "Beans"
    }

  ]
  return (
    <>
    <h1>Vegis Page</h1>
    {/* <ul>
      <li><Link href="/products/vegis/Broccoli">Broccoli</Link></li>
      <li><Link href="/products/vegis/Spinach">Spinach</Link></li>
    </ul> */}
    <ul>
    {vegis.map((vegi)=>{
      return(
        <li key={vegi.id}><Link href={`/products/vegis/${vegi.id}/`}>{vegi.veginame}</Link></li>
      )
    })}
    </ul>
    </>
  )
}

export default page