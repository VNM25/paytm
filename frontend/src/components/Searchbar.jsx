
export function Searchbar({placeholder}) {
  return (
    <div className="border bg-red-100 flex rounded-lg">
      <input
        type="text"
        name="searchbar"
        placeholder={placeholder}
        className="flex-1 p-3"
      />
    </div>
  );
}
