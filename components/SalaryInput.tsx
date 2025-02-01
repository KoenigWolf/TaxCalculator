"use client";

import { useState } from "react";
import { salarySchema } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SalaryInputProps {
  onSubmit: (salary: number) => void;
}

export default function SalaryInput({ onSubmit }: SalaryInputProps) {
  const [salary, setSalary] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value);
    setError(null);
  };

  const handleSubmit = () => {
    const parsed = salarySchema.safeParse({ salary: Number(salary) });

    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }

    onSubmit(Number(salary));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor="salary-input" className="block mb-2 text-lg font-medium">
        月給 (円)
      </label>
      <Input
        id="salary-input"
        type="number"
        value={salary}
        onChange={handleChange}
        className="w-full"
        placeholder="金額を入力"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      <Button onClick={handleSubmit} className="w-full mt-4">
        計算する
      </Button>
    </div>
  );
}
