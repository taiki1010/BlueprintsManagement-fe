"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SiteItemProps {
  id: string;
  name: string;
}

const SiteItem:React.FC<SiteItemProps> = ({id, name}) => {
  const pathname = usePathname();
  return (
    <Link href={`/management/sites/${id}`} className={`py-2 px-2 hover:bg-gray-700 hover:cursor-pointer ${pathname === "/management/sites/" + id ? "bg-gray-700": ""}`}>{name}</Link>
  )
}

export default SiteItem