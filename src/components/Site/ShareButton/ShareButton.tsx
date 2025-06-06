"use client";

interface Props {
  id: string;
  name: string;
}

const ShareButton = ({id, name}: Props) => {

  const copyToClipboard = async() => {
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/read/sites/${id}`;
    try {
      await navigator.clipboard.writeText(url);
      alert(name + "の共有用URLがクリップボードにコピーされました");
    } catch(err) {
      console.error(err);
      alert("クリップボードへのコピーが失敗しました");
    }
  }
  return (
    <button onClick={copyToClipboard} className="text-2xl text-white px-4 rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600">共有</button>
  )
}

export default ShareButton