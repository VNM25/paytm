import { Link } from "react-router-dom";

export function Buttonfooter({title, label, to}){
    return (
      <div className="flex gap-2 font-medium place-content-center">
        <div>{title}</div>
        <Link className="underline" to={to}>{label}</Link>
      </div>
    )
  }