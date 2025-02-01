import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { CalculationResult } from "@/lib/types";

export default function ResultDisplay({ data }: { data: CalculationResult }) {
  return (
    <div className="w-full max-w-2xl mt-6">
      <h2 className="text-xl font-semibold text-center">計算結果</h2>
      <Table className="w-full mt-4 border border-gray-200 rounded-lg shadow-sm">
        <TableHeader>
          <TableRow>
            <TableHead>項目</TableHead>
            <TableHead>金額</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow><TableCell>給与</TableCell><TableCell>¥{data.salary.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell>所得税</TableCell><TableCell className="text-red-500">-¥{data.incomeTax.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell>住民税</TableCell><TableCell className="text-red-500">-¥{data.residentTax.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell>健康保険</TableCell><TableCell className="text-red-500">-¥{data.healthInsurance.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell>厚生年金</TableCell><TableCell className="text-red-500">-¥{data.pension.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell>雇用保険</TableCell><TableCell className="text-red-500">-¥{data.employmentInsurance.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell className="font-semibold">税金・保険合計</TableCell><TableCell className="font-semibold text-red-600">-¥{data.totalDeductions.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell className="font-semibold">手取り給与</TableCell><TableCell className="font-semibold text-green-500">¥{data.netSalary.toLocaleString()}</TableCell></TableRow>
        </TableBody>
      </Table>

      <h2 className="mt-6 text-lg font-semibold text-gray-700">📌 会社負担額（参考）</h2>
      <Table className="w-full mt-4 border border-gray-200 rounded-lg shadow-sm">
        <TableBody>
          <TableRow><TableCell>健康保険（会社負担）</TableCell><TableCell>¥{data.companyHealthInsurance.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell>厚生年金（会社負担）</TableCell><TableCell>¥{data.companyPension.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell>雇用保険（会社負担）</TableCell><TableCell>¥{data.companyEmploymentInsurance.toLocaleString()}</TableCell></TableRow>
          <TableRow><TableCell className="font-semibold">会社負担合計</TableCell><TableCell className="font-semibold">¥{data.companyTotalContributions.toLocaleString()}</TableCell></TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
