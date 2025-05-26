"use server";

import { redirect } from "next/navigation";

interface FormState {
  error: string;
}

export const addSite = async(state: FormState, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData);
  const data = {
    name: rawFormData.name,
    address: rawFormData.address,
    remark: rawFormData.remark
  }

  const response = await fetch(`${process.env.ENDPOINT}/sites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  
  if(!response.ok) {
    state.error = result.message;
    console.log(state.error);
    return state;
  }

  const id = result.id;
  redirect(`/management/sites/${id}`);
}

export const editSite = async(id:string, state: FormState, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData);
  const data = {
    name: rawFormData.name,
    address: rawFormData.address,
    remark: rawFormData.remark
  }

  const response = await fetch(`${process.env.ENDPOINT}/sites/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if(!response.ok) {
    state.error = result.message;
    return state;
  }

  redirect(`/management/sites/${id}`);
}

export const deleteSite = async(id: string) => {
  fetch(`${process.env.ENDPOINT}/sites/${id}`, {
    method: "DELETE",
  })
  redirect("/management");
}