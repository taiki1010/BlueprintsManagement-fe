"use client"

import { useState } from "react";
import { ArchitecturalDrawing, BlueprintInfoType } from "../BlueprintInfo"
import Image from "next/image";

const BlueprintImage = ({blueprintInfo}: {blueprintInfo: BlueprintInfoType}) => {
  console.log(blueprintInfo);

  const architecturalDrawingList = blueprintInfo.architecturalDrawingList;
  const sorttedArchitecturalDrawingList = architecturalDrawingList.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  const initialArchitecturalDrawing = sorttedArchitecturalDrawingList[0];
  
  const [architecturalDrawing, setArchitecturalDrawing] = useState<ArchitecturalDrawing>(initialArchitecturalDrawing);
  const [selected, setSelected] = useState<string>(initialArchitecturalDrawing.id);

  const filePath = architecturalDrawing.filePath
  const imageUrl = filePath ? `${process.env.NEXT_PUBLIC_ENDPOINT}/${filePath}` : undefined;

  const selectItems = sorttedArchitecturalDrawingList.map((item: ArchitecturalDrawing) => (
    <option key={item.id} value={item.id}>{item.createdAt}</option>
  ))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = architecturalDrawingList.findIndex((item: ArchitecturalDrawing) => {
      return item.id === e.target.value
    });
    setSelected(e.target.value);
    setArchitecturalDrawing(architecturalDrawingList[index]);
  }

  return (
    <div className="flex flex-col justify-between h-full gap-5">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <h2 className="text-4xl font-bold">{blueprintInfo.blueprint?.name}</h2>
        </div>
        
        <div className="flex gap-5">
          <select value={selected} onChange={(e) => handleChange(e)} className="border px-3 text-2xl rounded-md">
          {selectItems}
          </select>
        </div>
      </div>

      <div className="relative h-full">
        {imageUrl && <Image src={imageUrl} fill style={{objectFit: "contain"}} alt=""/>}
      </div>
    </div>
  )
}

export default BlueprintImage