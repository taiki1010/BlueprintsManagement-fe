"use server";

import { redirect } from "next/navigation";

interface FormState {
  error: string;
}


export const addArchitecturalDrawing = async(id: string, blueprintId: string, pathName: string, createdAtList: string[], formState: FormState, formData: FormData) => {

  const rawFormData = Object.fromEntries(formData);
  const createdAt = rawFormData.createdAt as string;
  const siteId = id;

  if(createdAtList.includes(createdAt)) {
    return {error: "選択した日付の図面が存在します"}
  }

  formData.append("siteId", siteId);
  formData.append("blueprintId", blueprintId);

  const response = await fetch(`${process.env.ENDPOINT}/architecturalDrawings`, {
    method: "POST",
    body: formData
  })

  const result = await response.json();

  if(!response.ok) {
    return {error: result.message}
  }

  redirect(`${pathName}`);
}

