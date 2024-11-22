import { UserIcon } from "./UserIcon";

export function Appbar() {
    return (
      <div className="flex justify-between border py-4 mx-5">
        <div className="text-3xl font-semibold">Payments App</div>
        <div className="flex items-center gap-5">
          <div className="text-xl">Hello, User</div>
          <UserIcon value={"U"} style={'primary'}></UserIcon>
        </div>
      </div>
    );
  }