import { deleteSite } from "@/app/actions/siteAction";
import { useEffect, useRef } from "react";

interface PropsType {
  id: string;
  isOpenDeleteModal: boolean;
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteSiteModal = ({id, isOpenDeleteModal, setIsOpenDeleteModal}: PropsType) => {

  const modalRef = useRef(null);
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
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[40vw] p-4 md:p-10 md:pb-20 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>
            <h2 className="text-2xl font-bold mb-8">現場情報を削除してもよろしいですか？</h2>
            <div className="flex gap-8">
              <button onClick={() => {deleteSite(id)}} className="basis-1/2 block text-white text-2xl font-bold w-full h-14 rounded-md bg-red-500 hover:bg-red-600 cursor-pointer">削除</button>
              <button onClick={() => setIsOpenDeleteModal(false)} className="basis-1/2 block text-white text-2xl font-bold h-14 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">キャンセル</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default DeleteSiteModal