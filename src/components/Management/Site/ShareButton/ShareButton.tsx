"use client";

import { useState } from "react";
import ShareModal from "./ShareModal";

interface PropsType {
  id: string;
  name: string;
}

const ShareButton = ({id, name}: PropsType) => {

  const [isOpenShareModal, setIsOpenShareModal] = useState<boolean>(false);

  return (
    <>
      <div>
        <button onClick={()=>setIsOpenShareModal(true)} className="text-2xl text-white px-4 h-full rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600">
          共有
        </button>
      </div>

      {isOpenShareModal && <ShareModal id={id} name={name} isOpenShareModal={isOpenShareModal} setIsOpenShareModal={setIsOpenShareModal}/>}
    </>
  )
}

export default ShareButton