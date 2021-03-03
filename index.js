const calculateBill = (price, vat, tip) => {
  if (
    typeof price !== "number" ||
    typeof vat !== "number" ||
    typeof tip !== "number"
  )
    return "error";
  return `£${price + vat + tip}`;
};

module.exports = calculateBill;
