// app/error.tsx
"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-red-500">エラーが発生しました</h2>
      <button type="button" onClick={() => reset()} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        リトライ
      </button>
    </div>
  );
}
