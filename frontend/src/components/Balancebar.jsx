import axios from "axios";
import { useEffect, useState } from "react";

export function Balancebar() {
  const [balance, setBalance] = useState("")
  useEffect(() => {
    getUsersBalance()
  })

  async function getUsersBalance(){
    const response = await axios.request({
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/v1/account/balance',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2IxYTZiYzhjZWU5NmUzMzJmNjJhMyIsImlhdCI6MTczMTkyNjYzNX0.Ph05tlInftE6Y5nsrDG0lmqnfp-EF3Dvq2wUwLBMo0Q'
      }
    });
    console.log(response.data);
    setBalance(response.data.balance)
  }


  return (
    <div className="flex text-2xl gap-3 mx-5 py-4">
      <div className="font-bold">Your Balance</div>
      <div className="font-semibold">${balance}</div>
    </div>
  );
}
