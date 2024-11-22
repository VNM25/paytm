export function Balancebar({ balance }) {
  return (
    <div className="flex text-2xl gap-3 mx-5 py-4">
      <div className="font-bold">Your Balance</div>
      <div className="font-semibold">${balance}</div>
    </div>
  );
}
