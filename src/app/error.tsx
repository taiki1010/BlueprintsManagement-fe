'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl mb-4">図面管理システム</h2>
        <p className="text-3xl mb-4 text-red-600 font-bold">{error.message}</p>
        <Link href="/login" className="text-2xl text-blue-600 font-bold">トップページに戻る</Link>
      </div>
    </div>
  );
}
