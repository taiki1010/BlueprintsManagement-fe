import { getBlueprintsBySiteId } from "@/app/actions/blueprintAction";
import BlueprintListInfo from "./BlueprintListInfo/BlueprintListInfo";
import BlueprintItem from "./BlueprintItem/BlueprintItem";

interface Props {
  siteId: string;
}

interface BlueprintType {
  id: string;
  siteId: string;
  name: string;
}

const BlueprintList = async({siteId}: Props) => {
  const blueprints = await getBlueprintsBySiteId(siteId) as BlueprintType[];

  return (
    <div className="flex flex-col">
      <BlueprintListInfo siteId={siteId}/>
      {blueprints.length > 0 && blueprints.map((blueprint) => (
        <BlueprintItem key={blueprint.id} blueprintId={blueprint.id} blueprintName={blueprint.name}/>
      ))}
    </div>
  )
}

export default BlueprintList