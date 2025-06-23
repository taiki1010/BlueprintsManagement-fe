"use client";

import { useEffect, useRef, useState } from "react";

interface PropsType {
  id: string;
  name: string;
  isOpenShareModal: boolean;
  setIsOpenShareModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShareModal = ({id, name, isOpenShareModal, setIsOpenShareModal}: PropsType) => {
  
  const modalRef = useRef(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(modalRef.current && !(modalRef.current as HTMLElement).contains(e.target as Node)) {
        setIsOpenShareModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsOpenShareModal]);

  useEffect(() => {
    copyToClipboard();
  }, []);

  const copyToClipboard = async() => {
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/read/sites/${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setMessage(name + "の共有用URLが\nクリップボードにコピーされました");
    } catch(err) {
      console.error(err);
      setMessage("クリップボードへのコピーが失敗しました");
    }
  }

  return (
    <>
      {isOpenShareModal &&
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black/80">
          <div className="relative z-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[34vw] p-4 md:p-10 md:pb-10 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto" ref={modalRef}>
            <p className="text-2xl mb-8 whitespace-pre-line">{message}</p>
            <div className="flex justify-end">
              <button onClick={() => setIsOpenShareModal(false)} className="text-2xl text-white px-4 py-2 rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600">閉じる</button>
            </div>
            
          </div>
        </div>
      }
    </>
  )
}

export default ShareModal