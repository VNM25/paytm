import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { UserIcon } from "./UserIcon";

export function Users({ props }) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log("🚀 ~ handleSubmit ~ event:", event);
    event.preventDefault();
    navigate("/send");
  };
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <UserIcon value={`U${props.idx + 1}`} style={'primary'}></UserIcon>
        <div className="text-2xl font-bold">{props.firstName}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <Button title={"Send Money"} background={'primary'}></Button>
      </form>
    </div>
  );
}
