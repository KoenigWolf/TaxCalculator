import { z } from "zod";

export const salarySchema = z.object({
  salary: z.number().min(10000, "給与は 10,000円以上である必要があります"),
  age: z.number().optional().default(30),
  dependents: z.number().optional().default(0), // ✅ 扶養人数を追加
});
