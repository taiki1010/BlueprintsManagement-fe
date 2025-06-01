import BlueprintList from "./BlueprintList/BlueprintList";
import AddBlueprintModal from "./Modal/AddBlueprintModal";

interface Props {
  siteId: string;
  isSiteDetailPage: boolean;
}
const BlueprintMenu = ({siteId, isSiteDetailPage}: Props) => {

  return (
    <div className="h-screen w-56 pt-8 bg-slate-300">
      <div className="flex border-b pb-4 px-2 mb-4">
        <h2 className="mr-4 text-2xl">図面一覧</h2>
        <AddBlueprintModal siteId={siteId}/>
      </div>
      <BlueprintList siteId={siteId} isSiteDetailPage={isSiteDetailPage} />
    </div>
  )
}

export default BlueprintMenu