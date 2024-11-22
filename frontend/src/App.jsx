import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Singin } from "./components/Signin";
import { Dashboard } from "./components/Dashboard";
import { Send } from "./components/Send";

function App() {
  return (
    <>
      {/* <div className="text-3xl font-bold underline">Hello world</div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Singin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<Send />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
