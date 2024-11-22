import { Button } from "./Button";
import { Card } from "./Card";
import { Heading } from "./Headings";
import { Searchbar } from "./Searchbar";
import { UserIcon } from "./UserIcon";

export function Send() {
  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-[500px] shadow-lg">
        <Card>
          <div className="m-5 p-2">
            <Heading title={"Send Money"}></Heading>
          </div>
          <div className="m-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <UserIcon value={"J"} style={"secondary"}></UserIcon>
              <div className="text-2xl font-semibold">Jhon Doe</div>
            </div>
            <div>Amount (in $)</div>
            <Searchbar placeholder={"Enter amount"}></Searchbar>
            <Button
              title={"Initiate Transfer"}
              background={"secondary"}
            ></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
