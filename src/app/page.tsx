import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl mb-4">図面管理システム</h2>
        <Link href="/management" className="text-2xl text-blue-600 font-bold">管理画面に移動</Link>
      </div>
    </div>

  )
}

export default Main