import { useState } from "react";
import { InputBox } from "./Inputbox";
import { Heading, Subheading } from "./Headings";
import { Button } from "./Button";
import { Buttonfooter } from "./Buttonfooter";
import { Card } from "./Card";

export function Singin() {
  const [formData, changeFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event, formData);
  };

  return (
    <div className="h-screen bg-gray-400 flex items-center justify-center">
      <div className="w-[400px]">
        <Card>
          <Heading title={"Sign in"} />
          <Subheading
            title={"Enter your credentials to access your account"}
          ></Subheading>

          <form onSubmit={handleSubmit}>
            <InputBox
              props={{
                changeFormData: changeFormData,
                label: "Email",
                key: "email",
                placeholder: "jhon@gmail.com",
              }}
            ></InputBox>
            <InputBox
              props={{
                changeFormData: changeFormData,
                label: "Password",
                key: "password",
                placeholder: "123456",
              }}
            ></InputBox>
            <div className="flex flex-col gap-1">
              <Button title={"Sign in"} background={'primary'}></Button>
              <Buttonfooter
                title={"Dont't have an account?"}
                label={"Sign up"}
                to={"/signup"}
              ></Buttonfooter>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
