"use client"

import { redirect, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import EditSiteModal from "../Modal/EditSiteModal";
import DeleteSiteModal from "../Modal/DeleteSiteModal";
import {  useSiteInfoContext } from "@/context/SiteInfoContext";

export interface SiteInfoType {
  id: string;
  name: string;
  address: string;
  remark: string;
}

const SiteInfo = () => {
  const params = useParams();
  const id = params.id as string;
  const siteIdValue = useSiteInfoContext();
  const [siteInfo, setSiteInfo] = useState<Partial<SiteInfoType>>({})
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    const getSite = async() => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/sites/${id}`);

      if(response.status !== 200) {
        redirect("/management");
      }

      const site = await response.json() as SiteInfoType;

      setSiteInfo(site);
      siteIdValue.setSiteId(site.id);
    }
    getSite();
  }, [params.id])

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h2 className="text-6xl font-bold mb-8">{siteInfo.name}</h2>
        <p className="text-4xl mb-4">{siteInfo.address}</p>
        <p className="text-2xl">{siteInfo.remark}</p>
      </div>
      
      <div>
        <button onClick={()=>setIsOpenEditModal(true)} className="text-2xl text-white px-4 py-2 rounded-md mr-6 cursor-pointer bg-slate-500 hover:bg-slate-600">修正</button>
        <button onClick={() => setIsOpenDeleteModal(true)} className="text-2xl text-white px-4 py-2 rounded-md cursor-pointer bg-red-500 hover:bg-red-600">削除</button>
      </div>

      {isOpenEditModal && <EditSiteModal siteInfo={siteInfo} isOpenEditModal={isOpenEditModal} setIsOpenEditModal={setIsOpenEditModal} />}
      {isOpenDeleteModal && <DeleteSiteModal id={id} isOpenDeleteModal={isOpenDeleteModal} setIsOpenDeleteModal={setIsOpenDeleteModal} /> }

    </div>
  )
}

export default SiteInfo