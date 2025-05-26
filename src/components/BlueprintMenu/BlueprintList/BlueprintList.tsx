import { useSiteIdContext } from "@/context/SiteIdContext"
import Link from "next/link"
import { usePathname } from "next/navigation";

const BlueprintList = () => {
  const siteIdValue = useSiteIdContext();
  const siteId = siteIdValue.siteId;
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <Link href={`/management/sites/${siteId}`} className={`px-2 py-2 hover:cursor-pointer hover:bg-slate-400 ${pathname === "/management/sites/" + siteId ? "bg-slate-400": ""}`}>詳細</Link>
    </div>
  )
}

export default BlueprintList