import { deleteSite } from "@/app/actions/siteAction";
import { useActionState, useEffect, useRef } from "react";

interface PropsType {
  id: string;
  isOpenDeleteModal: boolean;
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteSiteModal = ({id, isOpenDeleteModal, setIsOpenDeleteModal}: PropsType) => {

  const modalRef = useRef(null);

  const deleteSiteWithId = deleteSite.bind(null, id);

  const initialState = {error: ""}
  const [state, formAction, isPending] = useActionState(deleteSiteWithId, initialState);

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
            <h2 className="text-2xl font-bold mb-8">現場情報を削除してもよろしいですか？</h2>
            <form action={formAction}>
              {!isPending && state.error && <p className="text-2xl font-bold text-red-500 mb-2">{state.error}</p>}
              {isPending && <p className="text-2xl font-bold text-green-500 mb-2">現場を削除しています</p>}
              <div className="flex gap-8">
                <button type="submit" className="basis-1/2 block text-white text-2xl font-bold w-full h-14 rounded-md bg-red-500 hover:bg-red-600 cursor-pointer disabled:bg-red-600" disabled={isPending}>削除</button>
                <button onClick={() => setIsOpenDeleteModal(false)} className="basis-1/2 block text-white text-2xl font-bold h-14 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer disabled:bg-gray-600" disabled={isPending}>キャンセル</button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default DeleteSiteModal