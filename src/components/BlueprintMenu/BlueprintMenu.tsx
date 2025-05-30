"use client";

// import { useSiteIdContext } from "@/context/SiteIdContext";
import BlueprintList from "./BlueprintList/BlueprintList";
import { useState } from "react";
import AddBlueprintModal from "./Modal/AddBlueprintModal";

const BlueprintMenu = () => {
  // const siteIdValue = useSiteIdContext();
  // const siteId = siteIdValue.siteId;
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  return (
    <div className="h-screen w-56 pt-8 bg-slate-300">
      <div className="flex border-b pb-4 px-2 mb-4">
        <h2 className="mr-4 text-2xl">図面一覧</h2>
        <button onClick={() => setIsOpenAddModal(true)} className="text-white py-1 px-2 rounded-md bg-slate-800 hover:bg-slate-600 cursor-pointer">追加</button>
      </div>
      <BlueprintList />

      {isOpenAddModal && <AddBlueprintModal isOpenAddModal={isOpenAddModal} setIsOpenAddModal={setIsOpenAddModal}/>}
    </div>
  )
}

export default BlueprintMenu