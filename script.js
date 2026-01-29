document.getElementById("calculateBtn").addEventListener("click", calculateTax);

function calculateTax() {
  const incomeInput = document.getElementById("income");
  const resultDiv = document.getElementById("result");

  const income = Number(incomeInput.value);

  if (!income || income <= 0) {
    resultDiv.textContent = "Please enter a valid income amount.";
    return;
  }

  // Simplified federal tax estimate
  const federalTaxRate = 0.22;
  const estimatedTax = income * federalTaxRate;
  const netIncome = income - estimatedTax;

  resultDiv.textContent =
    `Estimated Take-Home Pay: $${netIncome.toLocaleString()}`;
}
