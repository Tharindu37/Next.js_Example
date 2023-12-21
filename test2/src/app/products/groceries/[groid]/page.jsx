import React from 'react'

function page({params}) {
  return (
    <h1>Groceries {params.groid}</h1>
  )
}

export default page