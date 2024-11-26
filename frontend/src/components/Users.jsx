import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { UserIcon } from "./UserIcon";

export function Users({ props }) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/send?name=${props.firstName}&id=${props._id}`);
  };
  return (
    <div className="flex justify-between" key={props.index}>
      <div className="flex gap-2 items-center">
        <UserIcon value={`U${props.index + 1}`} style={'primary'}></UserIcon>
        <div className="text-2xl font-bold">{`${props.firstName} ${props.lastName}`}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <Button title={"Send Money"} background={'primary'}></Button>
      </form>
    </div>
  );
}
