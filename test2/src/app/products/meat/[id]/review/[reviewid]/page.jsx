import React from 'react'

function page({params}) {
  return (
    <h1>Meet {params.id} Review {params.reviewid}</h1>
  )
}

export default page