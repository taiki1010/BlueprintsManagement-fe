"use client";

import { addSite } from "@/app/actions/siteAction";
import { useActionState, useState } from "react";

const AddSiteForm = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [remark, setRemark] = useState<string>("");

  const initialState = { error: "" }
  const [state, formAction, isPending] = useActionState(addSite, initialState)

  return (
    <div className="h-screen py-10 px-60">
      <h2 className="text-4xl text-center font-bold mb-10">新規現場を追加</h2>
      <form action={formAction}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-2xl font-medium mb-2">現場名</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-2xl font-medium mb-2">住所</label>
          <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} className="block py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300" required/>
        </div>
        <div className="mb-10">
          <label htmlFor="remark" className="block text-2xl font-medium mb-2">備考</label>
          <textarea id="remark" name="remark" value={remark} onChange={(e) => setRemark(e.target.value)} className="block py-1.5 px-2 w-full h-40 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"/>
        </div>
        {!isPending && state.error && <p className="text-2xl text-red-500 mb-2">{state.error}</p>}
        {isPending && <p className="text-2xl font-bold text-green-500 mb-2">現場を新規登録しています</p>}
        <div>
          <button type="submit" className="block text-white text-2xl font-bold w-full h-14 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer disabled:bg-blue-600" disabled={isPending}>追加</button>
        </div>
        
    </form>
    </div>
    
  )
}

export default AddSiteForm