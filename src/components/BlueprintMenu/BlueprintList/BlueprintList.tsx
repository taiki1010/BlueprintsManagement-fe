import { getBlueprintsBySiteId } from "@/app/actions/blueprintAction";
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BlueprintItem from "./BlueprintItem/BlueprintItem";

interface BlueprintType {
  id: string;
  siteId: string;
  name: string;
}

const BlueprintList = () => {
  const params = useParams();
  const siteId = params.id as string;
  const pathname = usePathname();
  const [blueprints, setBlueprints] = useState<BlueprintType[]>([]);
  
  useEffect(() => {
    const getBlueprints = async() => {
      const blueprintsList = await getBlueprintsBySiteId(siteId) as BlueprintType[];
      setBlueprints(blueprintsList);
    }
    getBlueprints();
  }, [siteId])

  const renderBlueprintList = () => {
    if(Array.isArray(blueprints) && blueprints.length != 0) {
      return (
        blueprints.map((blueprint) => (
          <BlueprintItem key={blueprint.id} blueprintId={blueprint.id} blueprintName={blueprint.name}/>
        ))
      )
    }
  }

  return (
    <div className="flex flex-col">
      <Link href={`/management/sites/${siteId}`} className={`px-2 py-2 hover:cursor-pointer hover:bg-slate-400 ${pathname === `/management/sites/${siteId}` ? "bg-slate-400": ""}`}>詳細</Link>
      {renderBlueprintList()}
    </div>
  )
}

export default BlueprintList