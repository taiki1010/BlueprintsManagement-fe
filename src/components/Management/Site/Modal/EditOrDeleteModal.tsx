"use client";


import {useState} from "react";
import { SiteInfoType } from "../SiteInfo/SiteInfo";
import EditSiteModal from "./EditSiteModal";
import DeleteSiteModal from "./DeleteSiteModal";

interface Props {
  siteInfo: SiteInfoType
}

const EditOrDeleteModal = ({siteInfo}: Props) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  return (
    <>
      <div>
        <button onClick={()=>setIsOpenEditModal(true)} className="text-2xl text-white px-4 py-2 rounded-md mr-6 cursor-pointer bg-slate-500 hover:bg-slate-600">修正</button>
        <button onClick={() => setIsOpenDeleteModal(true)} className="text-2xl text-white px-4 py-2 rounded-md cursor-pointer bg-red-500 hover:bg-red-600">削除</button>
      </div>

      {isOpenEditModal && <EditSiteModal siteInfo={siteInfo} isOpenEditModal={isOpenEditModal} setIsOpenEditModal={setIsOpenEditModal} />}
      {isOpenDeleteModal && <DeleteSiteModal id={siteInfo.id} isOpenDeleteModal={isOpenDeleteModal} setIsOpenDeleteModal={setIsOpenDeleteModal} /> }
    </>
  )
}

export default EditOrDeleteModal;