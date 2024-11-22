export function Button({ title , background}) {
  const BUTTONCOLOURS = {
    primary: 'bg-blue-900 hover:bg-blue-950',
    secondary: 'bg-green-500 hover:bg-green-700',
  }
  return <input className={`border-2 rounded-lg text-white p-3 font-bold cursor-pointer ${BUTTONCOLOURS[background]}`} type="submit" value={title} />;
}
