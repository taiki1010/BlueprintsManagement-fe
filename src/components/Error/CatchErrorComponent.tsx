import Link from "next/link";

const CatchErrorComponent = ({error}: {error: string}) => {
  return (
    <div role="alert" className="px-10 py-10">
      <p className="text-2xl text-red-500 font-bold mb-4">エラーが発生しました: {error}</p>
      <Link href="/management/" className="text-2xl text-blue-500 underline">トップページに戻る</Link>
    </div>
  );
}

export default CatchErrorComponent;