import { useSearchParams } from "react-router-dom";
import { Button } from "./Button";
import { Card } from "./Card";
import { Heading } from "./Headings";
import { UserIcon } from "./UserIcon";
import { useState } from "react";
import axios from "axios";

export function Send() {
  const [amount, setAmount] = useState();
  const [searchParams] = useSearchParams();

  async function handleSubmit(e) {
    e.preventDefault();
    const recipientId = searchParams.get("id");
    console.log("🚀 ~ handleSubmit ~ recipientId:", recipientId)
    const response = await axios.request({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/v1/account/transfer",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2IxYTZiYzhjZWU5NmUzMzJmNjJhMyIsImlhdCI6MTczMTkyNjYzNX0.Ph05tlInftE6Y5nsrDG0lmqnfp-EF3Dvq2wUwLBMo0Q",
      },
      data: {
        to: recipientId,
        amount
      },
    });
    console.log("🚀 ~ handleSubmit ~ response:", response);
  }
  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-[500px] shadow-lg">
        <Card>
          <div className="m-5 p-2">
            <Heading title={"Send Money"}></Heading>
          </div>
          <div className="m-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <UserIcon
                value={searchParams.get("name")[0]}
                style={"secondary"}
              ></UserIcon>
              <div className="text-2xl font-semibold">
                {searchParams.get("name")}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <label>Amount (in $)</label>
              <input
                className="border p-2"
                placeholder={"Enter amount"}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
              <Button
                title={"Initiate Transfer"}
                background={"secondary"}
              ></Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
