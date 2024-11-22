export function Card({ children }) {
    return (
      <div className="flex-1 flex flex-col p-4 bg-slate-50 border-lg shadow-sm rounded-lg gap-2">
        {children}
      </div>
    );
  }
  