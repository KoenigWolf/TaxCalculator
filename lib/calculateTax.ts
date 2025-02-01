import { TAX_RATES, DEDUCTIONS } from "./constants";

export function calculateDeductions(salary: number, age: number, dependents: number) {
  const healthInsurance = salary * TAX_RATES.healthInsurance;
  const pension = salary * TAX_RATES.pension;
  const employmentInsurance = salary * TAX_RATES.employmentInsurance;
  const careInsurance = age >= 40 ? salary * TAX_RATES.careInsurance : 0;

  const totalSocialInsurance = healthInsurance + pension + employmentInsurance + careInsurance;
  const basicDeduction = DEDUCTIONS.basic;
  const dependentDeduction = dependents * DEDUCTIONS.dependent;

  const taxableIncome = Math.max(salary - (basicDeduction + dependentDeduction + totalSocialInsurance), 0);
  const incomeTax = taxableIncome * TAX_RATES.incomeTax;
  const residentTax = taxableIncome * TAX_RATES.residentTax;
  const totalDeductions = incomeTax + residentTax + totalSocialInsurance;
  const netSalary = salary - totalDeductions;

  // 会社負担
  const companyHealthInsurance = healthInsurance;
  const companyPension = pension;
  const companyEmploymentInsurance = employmentInsurance;
  const companyTotalContributions = companyHealthInsurance + companyPension + companyEmploymentInsurance;

  return {
    salary,
    incomeTax,
    residentTax,
    healthInsurance,
    pension,
    employmentInsurance,
    careInsurance,
    totalDeductions,
    netSalary,
    taxableIncome,
    basicDeduction,
    dependentDeduction,
    companyHealthInsurance,
    companyPension,
    companyEmploymentInsurance,
    companyTotalContributions,
  };
}
