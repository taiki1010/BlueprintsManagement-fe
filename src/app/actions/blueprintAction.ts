"use server";

import { redirect } from "next/navigation";

interface FormState {
  error: string;
}

export const getBlueprintsBySiteId = async(siteId: string) => {
  const response = await fetch(`${process.env.ENDPOINT}/sites/${siteId}/blueprints`);
  const blueprints = await response.json();
  return blueprints;
}

export const getBlueprintInfo = async(id: string) => {
  const response = await fetch(`${process.env.ENDPOINT}/blueprints/${id}`);
  const blueprintInfo = await response.json();
  console.log(blueprintInfo);
  return blueprintInfo
}

export const addBlueprint = async(siteId: string, state: FormState, formData: FormData) => {
  formData.append("siteId", siteId);

  const response = await fetch(`${process.env.ENDPOINT}/blueprints`, {
    method: "POST",
    body: formData
  });

  const result = await response.json();

  if(!response.ok) {
    return {error: result.message}
  }

  const blueprintId = result.id;
  redirect(`/management/sites/${siteId}/blueprints/${blueprintId}`);
}