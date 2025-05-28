import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl mb-4">図面管理システム</h2>
        <p className="text-6xl mb-4">Not Found Page</p>
        <Link href="/management" className="text-2xl text-blue-600 font-bold">トップページに戻る</Link>
      </div>
    </div>
  )
}

export default NotFoundPage