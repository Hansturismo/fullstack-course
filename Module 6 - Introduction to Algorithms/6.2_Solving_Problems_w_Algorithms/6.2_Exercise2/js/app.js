function calculateUsageCost(usageKilowattHours, baseRate, additionalRate) {
  if (usageKilowattHours <= 100 && usageKilowattHours >= 1) {
    let total = usageKilowattHours * baseRate;
    return total;
  } else if (usageKilowattHours >= 100) {
    // Gave baseCost its own calculation instead of just calculating additionalCost using the raw sum of 100,
    // as the baseRate might change in the future.
    let baseCost = 100 * baseRate;
    let additionalCost = (usageKilowattHours - baseCost) * additionalRate;
    let sum = baseCost + additionalCost;
    return `${sum} NOK`;
  }
}

console.log(calculateUsageCost(250, 1, 1.5));
