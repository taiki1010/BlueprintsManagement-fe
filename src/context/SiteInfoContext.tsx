"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";


export const SiteInfoContext = createContext<{
  setSiteId: Dispatch<SetStateAction<string>>;
  siteId: string;
}>({
  setSiteId: function () {} as Dispatch<SetStateAction<string>>, 
  siteId: "",
})

export const useSiteInfoContext = () => {
  return useContext(SiteInfoContext)
}

const SiteInfoProvider = ({children}: {children: ReactNode}) => {
  const [siteId, setSiteId] = useState<string>("");

  const contextValue = {
    setSiteId: setSiteId,
    siteId: siteId,
  };

  return (
    <SiteInfoContext.Provider value={contextValue}>
    {children}
    </SiteInfoContext.Provider>
  );
};

export default SiteInfoProvider;