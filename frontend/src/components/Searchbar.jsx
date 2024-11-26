export function Searchbar({ placeholder, onChange }) {
  return (
    <div className="border bg-red-100 flex rounded-lg">
      <input
        type="text"
        name="searchbar"
        placeholder={placeholder}
        className="flex-1 p-3"
        onChange={(e) => {
          return onChange(e.target.value);
        }}
      />
    </div>
  );
}
