import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className="relative">
      <Image src="/images/bg-top.jpg" fill alt=""></Image>
      <div className="absolute inset-0 bg-orange-100/40"></div>
      <div className="h-screen w-screen flex justify-center items-center relative">
        <div className="text-center bg-black/70 px-20 py-20 text-gray-200">
          <p className="pb-4">大切な図面の管理・共有をシンプルに</p>
          <h2 className="text-5xl mb-12">図面管理システム</h2>
          <Link href="/management" className="text-2xl text-blue-600 font-bold bg-white px-4 py-2 rounded-sm cursor-pointer hover:bg-stone-400">管理画面に移動</Link>
        </div>
      </div>
    </div>
  )
}

export default Main