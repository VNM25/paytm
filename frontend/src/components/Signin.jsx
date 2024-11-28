import { useState } from "react";
import { InputBox } from "./Inputbox";
import { Heading, Subheading } from "./Headings";
import { Button } from "./Button";
import { Buttonfooter } from "./Buttonfooter";
import { Card } from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Singin() {
  const [formData, changeFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event, formData);
    const response = await axios
      .post("http://localhost:3000/api/v1/user/signin", formData)
      .catch((error) => {
        if (error.response){
          setError(error.response.data.message);
        }
      });
    if (response.status) {
      setError("")
      localStorage.setItem("authToken", response.data.token);
      navigate("/dashboard")
    }
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
                key: "username",
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
              <div className="text-sm text-red-700 font-medium">{error}</div>
              <Button title={"Sign in"} background={"primary"}></Button>
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
