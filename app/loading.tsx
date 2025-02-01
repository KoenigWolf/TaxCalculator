// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-semibold animate-pulse">データを読み込み中...</p>
    </div>
  );
}
