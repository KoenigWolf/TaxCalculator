export interface CalculationResult {
  salary: number;
  incomeTax: number;
  residentTax: number;
  healthInsurance: number;
  pension: number;
  employmentInsurance: number;
  careInsurance: number;
  totalDeductions: number;
  netSalary: number;
  taxableIncome: number;
  basicDeduction: number;
  dependentDeduction: number;
  
  // 会社負担
  companyHealthInsurance: number;
  companyPension: number;
  companyEmploymentInsurance: number;
  companyTotalContributions: number;
}
