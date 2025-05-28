import { redirect } from 'next/navigation'
import React from 'react'

const Main = () => {
  redirect("/management");
  return (
    <div>Main</div>
  )
}

export default Main