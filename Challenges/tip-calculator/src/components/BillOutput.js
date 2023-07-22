export default function BillOutput({ billAmount, tipPercent }) {
  const tipAmount = Number((tipPercent * billAmount) / 100).toFixed(2);
  const totalAmount = Number(billAmount) + Number(tipAmount);

  return (
    <div>{`You pay $${totalAmount} ($${billAmount} + $${tipAmount} tip)`}</div>
  );
}
