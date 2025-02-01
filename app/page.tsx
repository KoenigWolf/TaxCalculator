"use client";

import { useState } from "react";
import ResultDisplay from "@/components/ResultDisplay";
import type { CalculationResult } from "@/lib/types";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [salary, setSalary] = useState(300000);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        const data: CalculationResult = await res.json();
        setResult(data);
      }
    } catch (_err) {
      setError("サーバー通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">給与計算ツール</h1>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(Number(e.target.value))}
        className="w-full p-2 mt-4 border rounded"
        placeholder="給与を入力"
      />
      <Button onClick={handleCalculate} className="w-full mt-4" disabled={loading}>
        {loading ? "計算中..." : "計算"}
      </Button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
      {result && <ResultDisplay data={result} />}
    </div>
  );
}
