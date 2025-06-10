"use client";

import { useState } from "react";
import UpdateBlueprintModal from "./UpdateBlueprintModal";
import DeleteBlueprintModal from "./DeleteBlueprintModal";

interface Props {
  id: string;
  blueprintId: string;
  createdAt: string;
  filePath: string;
}

const UpdateOrDeleteModal = ({createdAtList, architecturalDrawing}: {createdAtList: string[],architecturalDrawing: Props}) => {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  return (
    <>
      <div>
        <button onClick={()=>setIsOpenUpdateModal(true)} className="text-2xl text-white px-4 py-2 rounded-md mr-6 cursor-pointer bg-blue-500 hover:bg-blue-600">更新</button>
        <button onClick={() => setIsOpenDeleteModal(true)} className="text-2xl text-white px-4 py-2 rounded-md cursor-pointer bg-red-500 hover:bg-red-600">削除</button>
      </div>

      {isOpenUpdateModal && <UpdateBlueprintModal isOpenUpdateModal={isOpenUpdateModal} setIsOpenUpdateModal={setIsOpenUpdateModal}
      createdAtList={createdAtList} />}
      {isOpenDeleteModal && <DeleteBlueprintModal isOpenDeleteModal={isOpenDeleteModal} setIsOpenDeleteModal={setIsOpenDeleteModal} 
      architecturalDrawing={architecturalDrawing}/> }
    </>
  )
}

export default UpdateOrDeleteModal