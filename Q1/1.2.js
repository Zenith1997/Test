const sales = [
  { amount: 10000, quantity: 10 },
  { amount: 1300, quantity: 30 },
  { amount: 15000, quantity: 5 },
  { amount: 60000, quantity: 12 },
];

console.log(sales);

function calcOrderedSales(sales) {
  const ordered_sales = sales.map((sale) => ({
    ...sale,
    Total: sale.amount * sale.quantity,
  }));
  ordered_sales.sort((a, b) => b.Total - a.Total);
  return ordered_sales;
}

console.log(calcOrderedSales(sales));
