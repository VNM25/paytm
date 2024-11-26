import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar";
import { Users } from "./Users";
import axios, { AxiosError } from "axios";
import { axiosInstance } from "../axiosInstance";
import { useNavigate } from "react-router-dom";

export function UsersList() {
  const [search, searchChange] = useState("");
  const [userList, changeuserList] = useState([]);

  const navigate = useNavigate();

  async function getUsers(params) {
    console.log("Search changed to:", search);
    const response = await axiosInstance
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`)
      .catch((error) => {
        console.log("🚀 ~ getUsers ~ error:", error);
        if (error.response) {
          navigate("/signup");
          return []
        }
      });
    console.log("🚀 ~ useEffect ~ response:", response);
    if (response.status == 201) changeuserList(response.data.users);
  }

  useEffect(() => {
    getUsers();
  }, [search]);

  return (
    <div className="mx-5 space-y-2">
      <div className="text-2xl font-bold">Users</div>
      <Searchbar
        placeholder={"Search users..."}
        onChange={searchChange}
      ></Searchbar>
      <div className="space-y-3">
        {userList.map((user) => {
          return <Users props={user}></Users>;
        })}
      </div>
    </div>
  );
}

// const USERS = [
//   { idx: 0, firstName: "John", userId: "8839483738" },
//   { idx: 1, firstName: "Jane", userId: "8839483739" },
//   { idx: 2, firstName: "Alice", userId: "8839483740" },
//   { idx: 3, firstName: "Bob", userId: "8839483741" },
//   { idx: 4, firstName: "Charlie", userId: "8839483742" },
// ];
