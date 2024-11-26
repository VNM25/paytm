import { Appbar } from "./Appbar";
import { Balancebar } from "./Balancebar";
import { UsersList } from "./UserList";


export function Dashboard() {
  return (
    <div className="">
      <Appbar></Appbar>
      <Balancebar></Balancebar>
      <UsersList></UsersList>
    </div>
  );
}



