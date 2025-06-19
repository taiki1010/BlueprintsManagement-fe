import { editBlueprint } from "@/app/actions/blueprintAction";
import { useParams } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";

interface PropsType {
  isOpenEditBlueprintNameModal: boolean;
  setIsOpenEditBlueprintNameModal: React.Dispatch<React.SetStateAction<boolean>>;
  blueprintName: string
}

interface ParamsType {
  [key: string]: string;
  id: string;
  blueprintId: string;
}

const EditBlueprintNameModal = ({isOpenEditBlueprintNameModal, setIsOpenEditBlueprintNameModal, blueprintName}: PropsType) => {

  const params = useParams<ParamsType>();
  const [inputName, setInputName] = useState<string>(blueprintName);

  const editBlueprintWithParams = editBlueprint.bind(null, params);

  const initialState = {error: ""};
  const [state, formAction, isPending] = useActionState(editBlueprintWithParams, initialState);

  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(modalRef.current && !(modalRef.current as HTMLElement).contains(e.target as Node)) {
        setIsOpenEditBlueprintNameModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsOpenEditBlueprintNameModal]);

  return (
    <>
      {isOpenEditBlueprintNameModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[40vw] h-90 p-4 md:p-10 md:pb-10 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>

            <h2 className="text-4xl text-center font-bold mb-8">図面名の変更</h2>

            <form action={formAction}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-2xl font-medium mb-2">図面名</label>
                <input type="text" id="name" name="name" value={inputName} onChange={(e) => setInputName(e.target.value)} className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required />
              </div>
              {!isPending && state.error && <p className="text-2xl font-bold text-red-500 mb-2">{state.error}</p>}
              {isPending && <p className="text-2xl font-bold text-green-500 mb-2">図面情報を更新しています</p>}
              <div className="flex gap-8">
                <button type="submit" className="basis-1/2 block text-white text-2xl font-bold w-full h-14 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer disabled:bg-blue-600" disabled={isPending}>決定</button>
                <button onClick={() => setIsOpenEditBlueprintNameModal(false)} className="basis-1/2 block text-white text-2xl font-bold h-14 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer disabled:bg-gray-600" disabled={isPending}>キャンセル</button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default EditBlueprintNameModal