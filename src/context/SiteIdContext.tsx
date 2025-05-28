"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";


export const SiteIdContext = createContext<{
  setSiteId: Dispatch<SetStateAction<string>>;
  siteId: string;
}>({
  setSiteId: function () {} as Dispatch<SetStateAction<string>>, 
  siteId: "",
})

export const useSiteIdContext = () => {
  return useContext(SiteIdContext)
}

const SiteIdProvider = ({children}: {children: ReactNode}) => {
  const [siteId, setSiteId] = useState<string>("");
  const contextValue = {
    setSiteId: setSiteId,
    siteId: siteId
  };

  return (
    <SiteIdContext.Provider value={contextValue}>
    {children}
    </SiteIdContext.Provider>
  );
};

export default SiteIdProvider;