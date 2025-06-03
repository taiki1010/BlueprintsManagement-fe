"use client";

import { useEffect, useRef } from "react";
import { deleteBlueprint } from "@/app/actions/blueprintAction";
import { useParams } from "next/navigation";
import { ArchitecturalDrawing } from "../BlueprintInfo";

interface PropsType {
  isOpenDeleteModal: boolean;
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  architecturalDrawing: ArchitecturalDrawing
}

interface ParamsType {
  [key: string]: string;
  id: string;
  blueprintId: string;
}

const DeleteBlueprintModal = ({isOpenDeleteModal, setIsOpenDeleteModal, architecturalDrawing}: PropsType) => {

  const modalRef = useRef(null);
  const params = useParams<ParamsType>();
  const deleteBlueprintWithParams = deleteBlueprint.bind(null, architecturalDrawing, params)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(modalRef.current && !(modalRef.current as HTMLElement).contains(e.target as Node)) {
        setIsOpenDeleteModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsOpenDeleteModal]);

  return (
    <>
      {isOpenDeleteModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[40vw] p-4 md:p-10 md:pb-10 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>

          <h2 className="text-4xl text-center font-bold mb-8">図面情報の削除</h2>
            <form action={deleteBlueprintWithParams} className="flex gap-8">
              <button type="submit" className="basis-1/2 block text-white text-2xl font-bold w-full h-14 rounded-md bg-red-500 hover:bg-red-600 cursor-pointer">削除</button>
              <button onClick={() => setIsOpenDeleteModal(false)} className="basis-1/2 block text-white text-2xl font-bold h-14 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">キャンセル</button>
            </form>
        </div>
      </div>
      }
    </>
  )
}

export default DeleteBlueprintModal