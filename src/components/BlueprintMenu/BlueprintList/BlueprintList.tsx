import { getBlueprintsBySiteId } from "@/app/actions/blueprintAction";
import Link from "next/link"
import BlueprintItem from "./BlueprintItem/BlueprintItem";

interface Props {
  siteId: string;
  isSiteDetailPage: boolean
}

interface BlueprintType {
  id: string;
  siteId: string;
  name: string;
}

const BlueprintList = async ({siteId, isSiteDetailPage}: Props) => {
  const blueprints = await getBlueprintsBySiteId(siteId) as BlueprintType[];

  return (
    <div className="flex flex-col">
      <Link href={`/management/sites/${siteId}`} className={`px-2 py-2 hover:cursor-pointer hover:bg-slate-400 ${isSiteDetailPage ? "bg-slate-400": ""}`}>詳細</Link>
      {blueprints.length > 0 && blueprints.map((blueprint) => (
        <BlueprintItem key={blueprint.id} blueprintId={blueprint.id} blueprintName={blueprint.name}/>
      ))}
    </div>
  )
}

export default BlueprintList