"use client";

import { getBlueprintInfo } from "@/app/actions/blueprintAction";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"

interface Blueprint {
  id: string;
  siteId: string;
  name: string;
}

interface ArchitecturalDrawing {
  id: string;
  blueprintId: string;
  createdAt: string;
  filePath: string;
}

interface BlueprintInfoType {
  blueprint: Blueprint;
  architecturalDrawingList: ArchitecturalDrawing[]
}

const BlueprintInfo = () => {
  const params = useParams();
  const blueprintId = params.blueprintId as string;
  const [blueprintInfo, setBlueprintInfo] = useState<Partial<BlueprintInfoType>>({});

  useEffect(() => {
    const getBlueprint = async() => {
      const response = await getBlueprintInfo(blueprintId) as BlueprintInfoType;
      setBlueprintInfo(response);
    }
    getBlueprint();
  }, [])

  // image/xxxxx.pngと言う値がfilePathに入る
  const filePath = blueprintInfo.architecturalDrawingList?.[0]?.filePath
  // バックエンドのホストにfilePathの値を結合して、画像のURLを作る
  const imageUrl = filePath ? `${process.env.NEXT_PUBLIC_ENDPOINT}/${filePath}` : undefined
  console.log(imageUrl);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold">{blueprintInfo.blueprint?.name}</h2>
        <div>
          <button className="text-2xl text-white px-4 py-2 rounded-md mr-6 cursor-pointer bg-slate-500 hover:bg-slate-600">更新</button>
          <button className="text-2xl text-white px-4 py-2 rounded-md cursor-pointer bg-red-500 hover:bg-red-600">削除</button>
        </div>
      </div>
      <div>
        {imageUrl && <Image src={imageUrl} width={500} height={500} alt="" />}
      </div>
    </div>
  )
}

export default BlueprintInfo