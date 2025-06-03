"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BlueprintListInfo = ({siteId}: {siteId: string}) => {
  const currentPathName = usePathname();
  const comparedPathName = `/management/sites/${siteId}`;

  return (
    <Link href={`/management/sites/${siteId}`} className={`px-2 py-2 hover:cursor-pointer hover:bg-slate-400 ${currentPathName === comparedPathName ? "bg-slate-400": ""}`}>詳細</Link>
  )
}

export default BlueprintListInfo