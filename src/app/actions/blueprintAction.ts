"use server";

import { ArchitecturalDrawing } from "@/components/Management/Blueprint/BlueprintInfo/BlueprintInfo";
import { redirect } from "next/navigation";

interface FormState {
  error: string;
}

interface ParamsType {
  id: string,
  blueprintId: string
}

export const getBlueprintsBySiteId = async(siteId: string) => {
  const response = await fetch(`${process.env.ENDPOINT}/sites/${siteId}/blueprints`);
  const blueprints = await response.json();
  return blueprints;
}

export const getBlueprintInfo = async(id: string) => {
  const response = await fetch(`${process.env.ENDPOINT}/blueprints/${id}`);
  const blueprintInfo = await response.json();
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

export const editBlueprint = async(params: ParamsType, state: FormState, formData: FormData) => {
  const {id, blueprintId} = params;
  const rawFormData = Object.fromEntries(formData.entries());

  const request = {
    id: blueprintId,
    name: rawFormData.name
  }

  const response = await fetch(`${process.env.ENDPOINT}/blueprints`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  })

  const result = await response.json();

  if(!response.ok) {
    return {error: result.message}
  }

  redirect(`/management/sites/${id}/blueprints/${blueprintId}`);
}

export const deleteBlueprint = async(architecturalDrawing: ArchitecturalDrawing, params: ParamsType) => {

  const {id, blueprintId} = params;

  const response = await fetch(`${process.env.ENDPOINT}/blueprints`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(architecturalDrawing)
  });

  const result = await response.json();

  if(result.isDeletedBlueprint) {
    redirect(`/management/sites/${id}`);
  } else {
    redirect(`/management/sites/${id}/blueprints/${blueprintId}`);
  }

}