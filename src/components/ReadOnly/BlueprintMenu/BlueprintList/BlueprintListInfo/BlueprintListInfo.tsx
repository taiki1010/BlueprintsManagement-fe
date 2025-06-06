"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  siteId: string
}

const BlueprintListInfo = ({siteId}: Props) => {
  const currentPathName = usePathname();
  const comparedPathName = `/read/sites/${siteId}`;

  return (
      <Link href={`/read/sites/${siteId}`} className={`px-2 py-2 hover:cursor-pointer hover:bg-slate-400 ${currentPathName === comparedPathName ? "bg-slate-400": ""}`}>詳細</Link>
  )
}

export default BlueprintListInfo