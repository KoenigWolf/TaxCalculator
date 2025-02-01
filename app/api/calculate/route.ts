import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { salarySchema } from "@/lib/validation";
import { calculateDeductions } from "@/lib/calculateTax";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = salarySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
    }

    const { salary, age, dependents } = parsed.data;
    const result = calculateDeductions(salary, age, dependents);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ _error: "サーバーエラー" }, { status: 500 });
  }
}
