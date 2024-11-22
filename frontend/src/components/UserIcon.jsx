
export function UserIcon({ value, style }) {
  const ICONSTYLE = {
    primary: 'bg-gray-100',
    secondary: 'bg-green-400 text-white font-bold',
  }
  return (
    <div className={`rounded-full w-[40px] h-[40px] p-2 text-center ${ICONSTYLE[style]}`}>
      {value}
    </div>
  );
}