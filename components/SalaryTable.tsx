import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type SalaryResult = {
  incomeTax: number;
  healthInsurance: number;
  pension: number;
  employmentInsurance: number;
  totalDeductions: number;
  netSalary: number;
};

export default function SalaryTable({ data }: { data: SalaryResult }) {
  return (
    <Table className="w-full text-lg">
      <TableHeader>
        <TableRow>
          <TableHead>項目</TableHead>
          <TableHead className="text-right">金額 (円)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>所得税</TableCell>
          <TableCell className="text-right">{data.incomeTax.toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>健康保険</TableCell>
          <TableCell className="text-right">{data.healthInsurance.toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>年金</TableCell>
          <TableCell className="text-right">{data.pension.toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>雇用保険</TableCell>
          <TableCell className="text-right">{data.employmentInsurance.toLocaleString()}</TableCell>
        </TableRow>
        <TableRow className="font-bold">
          <TableCell>控除合計</TableCell>
          <TableCell className="text-right">{data.totalDeductions.toLocaleString()}</TableCell>
        </TableRow>
        <TableRow className="font-bold bg-gray-100 dark:bg-gray-800">
          <TableCell>手取り給与</TableCell>
          <TableCell className="text-right text-green-600 dark:text-green-400">
            {data.netSalary.toLocaleString()}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
