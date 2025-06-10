import Link from "next/link"
import NavList from "./SiteList/SiteList"

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <div className="flex border-b border-white pb-4 px-2 mb-4 ">
        <h2 className="mr-4 text-2xl">現場一覧</h2>
        <Link href="/management/sites/new" className=" text-black py-1 px-2 rounded-md bg-white hover:bg-slate-400">追加</Link>
      </div>
      <NavList />
    </div>
  )
}

export default SideMenu