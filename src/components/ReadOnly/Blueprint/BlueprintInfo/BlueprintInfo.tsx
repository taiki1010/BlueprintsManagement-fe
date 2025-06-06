import { getBlueprintInfo } from "@/app/actions/blueprintAction";
import BlueprintImage from "./BlueprintImage/BlueprintImage";

interface Blueprint {
  id: string;
  siteId: string;
  name: string;
}

export interface ArchitecturalDrawing {
  id: string;
  blueprintId: string;
  createdAt: string;
  filePath: string;
}

export interface BlueprintInfoType {
  blueprint: Blueprint;
  architecturalDrawingList: ArchitecturalDrawing[];
}

interface Props {
  blueprintId: string
}

const BlueprintInfo = async({blueprintId}: Props) => {

  const blueprintInfo = await getBlueprintInfo(blueprintId) as BlueprintInfoType;

  return (
    <>
      <BlueprintImage blueprintInfo={blueprintInfo} />
    </>
  )
}

export default BlueprintInfo