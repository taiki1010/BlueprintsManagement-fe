import { useState } from "react";
import EditBlueprintNameModal from "./EditBlueprintNameModal";

const EditModal = ({blueprintName}: {blueprintName: string}) => {
  const [isOpenEditBlueprintNameModal, setIsOpenEditBlueprintNameModal] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpenEditBlueprintNameModal(true)}  className="text-2xl text-white px-4 py-2 rounded-md mr-6 cursor-pointer bg-slate-500 hover:bg-slate-600">修正</button>

      {isOpenEditBlueprintNameModal && <EditBlueprintNameModal isOpenEditBlueprintNameModal={isOpenEditBlueprintNameModal}
      setIsOpenEditBlueprintNameModal={setIsOpenEditBlueprintNameModal} 
      blueprintName={blueprintName}/>}
    </>
  )
}

export default EditModal