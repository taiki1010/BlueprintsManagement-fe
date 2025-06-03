"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

interface SiteItemProps {
  id: string;
  name: string;
}

const SiteItem:React.FC<SiteItemProps> = ({id, name}) => {
  const params = useParams();
  const siteId = params.id;

  return (
    <Link href={`/management/sites/${id}`} className={`py-2 px-2 hover:bg-gray-700 hover:cursor-pointer ${siteId == id ? "bg-gray-700": ""}`}>{name}</Link>
  )
}

export default SiteItem