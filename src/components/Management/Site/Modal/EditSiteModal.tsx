"use client";

import { editSite } from "@/app/actions/siteAction";
import { useActionState, useEffect, useRef, useState } from "react"
import { SiteInfoType } from "../SiteInfo/SiteInfo";

interface PropsType {
  siteInfo: Partial<SiteInfoType>;
  isOpenEditModal: boolean;
  setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditSiteModal = ({siteInfo, isOpenEditModal, setIsOpenEditModal}: PropsType) => {

  const modalRef = useRef(null);
  const {id, name, address, remark } = {...siteInfo};
  const [inputName, setInputName] = useState<string>(name || "");
  const [inputAddress, setInputAddress] = useState<string>(address || "");
  const [inputRemark, setInputRemark] = useState<string>(remark || "");

  const editSiteWithId = editSite.bind(null,id || "");

  const initialState = { error: "" }
  const [state, formAction, isPending] = useActionState(editSiteWithId, initialState);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(modalRef.current && !(modalRef.current as HTMLElement).contains(e.target as Node)) {
        setIsOpenEditModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsOpenEditModal]);

  return (
    <>
      {isOpenEditModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[60vw] p-4 md:p-10 md:pb-10 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>

          <h2 className="text-4xl text-center font-bold mb-8">現場情報の修正</h2>

          <form action={formAction}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-2xl font-medium mb-2">現場名</label>
              <input type="text" id="name" name="name" value={inputName} onChange={(e) => setInputName(e.target.value)} className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="block text-2xl font-medium mb-2">住所</label>
              <input type="text" id="address" name="address" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
            </div>
            <div className="mb-10">
              <label htmlFor="remark" className="block text-2xl font-medium mb-2">備考</label>
              <textarea id="remark" name="remark" value={inputRemark} onChange={(e) => setInputRemark(e.target.value)} className="block py-1.5 px-2 w-full h-40 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"/>
            </div>
            {state.error && <p className="text-2xl font-bold text-red-500 mb-2">{state.error}</p>}
            <div className="flex gap-8">
              <button type="submit" className="basis-1/2 block text-white text-2xl font-bold w-full h-14 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer" disabled={isPending}>決定</button>
              <button onClick={() => setIsOpenEditModal(false)} className="basis-1/2 block text-white text-2xl font-bold h-14 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">キャンセル</button>
            </div>
          </form>

          </div>
        </div>
      }
    </>
  )
}

export default EditSiteModal