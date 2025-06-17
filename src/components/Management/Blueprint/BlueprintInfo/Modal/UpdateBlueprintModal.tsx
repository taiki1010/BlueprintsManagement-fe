import { addArchitecturalDrawing } from "@/app/actions/architecturalAction";
import { useParams, usePathname } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker"

export interface PropsType {
  createdAtList: string[];
  isOpenUpdateModal: boolean;
  setIsOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateBlueprintModal = ({createdAtList, isOpenUpdateModal, setIsOpenUpdateModal}: PropsType) => {

  const {blueprintId} = useParams() as {blueprintId: string};
  const pathName = usePathname();

  const addArchitecturalDrawingWithParams = addArchitecturalDrawing.bind(null, blueprintId, pathName, createdAtList);

  const initialState = {error: ""}
  const [state, formAction, isPending] = useActionState(addArchitecturalDrawingWithParams, initialState);

  const modalRef = useRef(null);
  const Today = new Date();
  const [date, setDate] = useState<Date | null>(Today);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(modalRef.current && !(modalRef.current as HTMLElement).contains(e.target as Node)) {
        setIsOpenUpdateModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsOpenUpdateModal]);

  return (
    <>
      {isOpenUpdateModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[40vw] h-120 p-4 md:p-10 md:pb-10 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>

            <h2 className="text-4xl text-center font-bold mb-8">図面情報の更新</h2>

            <form action={formAction}>
              <div className="mb-6"> 
                <label htmlFor="createdAt" className="block text-2xl font-medium mb-2">作成日</label>
                <DatePicker selected={date} name="createdAt" dateFormat="yyyy-MM-dd" onChange={(date) => setDate(date)} className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
              </div>
              <div className="mb-10">
                <label htmlFor="imageFile" className="block text-2xl font-medium mb-2">図面
                </label>
                <input type="file" id="imageFile" name="imageFile" className="block px-1.5 py-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 cursor-pointer" required/>
              </div>
              {state.error && <p className="text-2xl font-bold text-red-500 mb-2">{state.error}</p>}
              <div className="flex gap-8">
                <button type="submit" className="basis-1/2 block text-white text-2xl font-bold w-full h-14 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer" disabled={isPending}>決定</button>
                <button onClick={() => setIsOpenUpdateModal(false)} className="basis-1/2 block text-white text-2xl font-bold h-14 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">キャンセル</button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default UpdateBlueprintModal