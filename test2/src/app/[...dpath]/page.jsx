import React from 'react'

function page({params}) {
    console.log(params)
  return (
    <>
    <h1>Catch All Routes</h1>
    <ul>
        {params.dpath.map((item)=>{
            return (
                <li>{item}</li>
            )
        })}
    </ul>
    </>

  )
}

export default page