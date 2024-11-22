import { Searchbar } from "./Searchbar";
import { Users } from "./Users";

export function UsersList() {
  return (
    <div className="mx-5 space-y-2">
      <div className="text-2xl font-bold">Users</div>
      <Searchbar placeholder={'Search users...'}></Searchbar>
      <div className="space-y-3">
        {USERS.map((user) => {
          return <Users props={user}></Users>;
        })}
      </div>
    </div>
  );
}

const USERS = [
  { idx: 0, firstName: "John", userId: "8839483738" },
  { idx: 1, firstName: "Jane", userId: "8839483739" },
  { idx: 2, firstName: "Alice", userId: "8839483740" },
  { idx: 3, firstName: "Bob", userId: "8839483741" },
  { idx: 4, firstName: "Charlie", userId: "8839483742" },
];
