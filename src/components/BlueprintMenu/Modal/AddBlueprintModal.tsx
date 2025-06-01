"use client";
import { addBlueprint } from "@/app/actions/blueprintAction";
import { useActionState, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

interface Props {
  siteId: string;
}

const AddBlueprintModal = ({siteId}: Props) => {
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);

    const modalRef = useRef(null);
    const [inputName, setInputName] = useState<string>("");
    const Today = new Date();
    const [date, setDate] = useState<Date | null>(Today);

    const addBlueprintWithSiteId = addBlueprint.bind(null, siteId);

    const initialState = { error: "" }
    const [state, formAction, isPending] = useActionState(addBlueprintWithSiteId, initialState)

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
          setIsOpenAddModal(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [modalRef, setIsOpenAddModal]);

  return (
    <>
      <button onClick={() => setIsOpenAddModal(true)} className="text-white py-1 px-2 rounded-md bg-slate-800 hover:bg-slate-600 cursor-pointer">追加</button>

      {isOpenAddModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
          <div className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[60vw] p-4 md:p-10 md:pb-10 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>

            <h2 className="text-4xl text-center font-bold mb-8">図面の追加</h2>

            <form action={formAction}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-2xl font-medium mb-2">図面名</label>
                <input type="text" id="name" name="name" value={inputName} onChange={(e) => setInputName(e.target.value)} className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
              </div>
              <div className="mb-6">
                <label htmlFor="createdAt" className="block text-2xl font-medium mb-2">作成日
                </label>
                <DatePicker selected={date} id="createdAt" name="createdAt" dateFormat="yyyy/MM/dd" onChange={(date) => setDate(date)}  className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
              </div>
              <div className="mb-6">
                <label htmlFor="blueprint" className="block text-2xl font-medium mb-2">図面
                </label>
                <input type="file" id="blueprint" name="blueprint" className="block py-1.5 py-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
              </div>
              <p>{state.error}</p>
              <div className="flex gap-8">
                <button type="submit" className="basis-1/2 block text-white text-2xl font-bold w-full h-14 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer" disabled={isPending}>決定</button>
                <button onClick={() => setIsOpenAddModal(false)} className="basis-1/2 block text-white text-2xl font-bold h-14 rounded-md bg-gray-500 hover:bg-gray-600 cursor-pointer">キャンセル</button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default AddBlueprintModal