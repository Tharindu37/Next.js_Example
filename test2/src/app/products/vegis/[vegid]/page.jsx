import React from 'react'
import  Link  from 'next/link';

function page({params}) {
  return (
    <>
    <Link href="/products/vegis">Back to Vegis</Link>
      <h1>Vegis {params.vegid}</h1>
      <br />
      
    </>
  )
}

export default page