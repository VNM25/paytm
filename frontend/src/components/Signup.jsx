import { useState } from "react";
import { InputBox } from "./Inputbox";
import { Heading, Subheading } from "./Headings";
import { Button } from "./Button";
import { Buttonfooter } from "./Buttonfooter";
import { Card } from "./Card";

export function Signup() {
  const [formData, changeFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="h-screen bg-gray-400 flex items-center justify-center" >
    <div className="w-[400px]">
      <Card>
        <Heading title={"Sign up"} />
        <Subheading
          title={"Enter your information to create an account"}
          ></Subheading>

        <form onSubmit={handleSubmit}>
          <InputBox
            props={{
              changeFormData: changeFormData,
              label: "First Name",
              key: "firstName",
              placeholder: "Jhon",
            }}
          ></InputBox>
          <InputBox
            props={{
              changeFormData: changeFormData,
              label: "Last Name",
              key: "lastName",
              placeholder: "Doe",
            }}
            ></InputBox>
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
            <Button title={"Sign up"} background={'primary'}></Button>
            <Buttonfooter
              title={"Already have an account?"}
              label={"Sign In"}
              to={"/signin"}
            ></Buttonfooter>
          </div>
        </form>
      </Card>
    </div>
</div>
  );
}
