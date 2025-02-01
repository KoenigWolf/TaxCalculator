"use client";

import { useState } from "react";
import type { CalculationResult } from "@/lib/types"; // `CalculationResult` を正しくインポート
import ResultDisplay from "@/components/ResultDisplay";

export default function Home() {
  // ステート管理
  const [salary, setSalary] = useState<number>(350000); // 月給（初期値 35万円）
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 計算処理
  const handleCalculate = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ salary }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.error || "エラーが発生しました");
        setResult(null);
      } else {
        const data = await res.json();
        setResult({ salary, ...data }); // salaryを含めて保存
      }
    } catch (err) {
      setError("サーバー通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
        給与計算ツール
      </h1>

      <div className="w-full max-w-md p-6 mt-4 bg-white shadow-md rounded-lg dark:bg-gray-800">
        <label htmlFor="salary" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          月給 (円)
        </label>
        <input
          id="salary"
          type="number"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          placeholder="350000"
          className="w-full p-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        />
        <button
          type="button"
          onClick={handleCalculate}
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "計算中..." : "計算"}
        </button>
        {error && <p className="mt-2 text-center text-red-500">{error}</p>}
      </div>

      {result && <ResultDisplay data={result} />}
    </div>
  );
}
