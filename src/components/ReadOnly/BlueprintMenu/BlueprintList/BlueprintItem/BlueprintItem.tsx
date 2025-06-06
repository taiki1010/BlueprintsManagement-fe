"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface Props {
  blueprintId: string;
  blueprintName: string;
}

const BlueprintItem = ({blueprintId, blueprintName}: Props) => {
  const params = useParams();
  const siteId = params.id;
  const pathname = usePathname();

  return (
        <Link href={`/read/sites/${siteId}/blueprints/${blueprintId}`} className={`px-2 py-2 cursor-pointer hover:bg-slate-400 ${pathname === `/read/sites/${siteId}/blueprints/${blueprintId}`?"bg-slate-400" : ""}`}>{blueprintName}</Link>
  )
}

export default BlueprintItem