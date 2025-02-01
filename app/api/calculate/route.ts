export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { salary } = body;

    if (!salary) {
      return new Response(JSON.stringify({ error: "給与を入力してください。" }), {
        status: 400,
      });
    }

    // 給与計算ロジック
    const incomeTax = salary * 0.1;
    const netSalary = salary - incomeTax;

    return new Response(JSON.stringify({ salary, incomeTax, netSalary }), {
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: "サーバーエラーが発生しました。" }), {
      status: 500,
    });
  }
}
