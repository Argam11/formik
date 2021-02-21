import { useState } from "react";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import "./App.scss";

function App() {
  const [activeTab, setActiveTab] = useState("Signin");
  return (
    <div className="App">
      <div className="nav-bar">
        <p
          className={activeTab === "Signin" && "active"}
          onClick={() => setActiveTab("Signin")}
        >
          Signin
        </p>
        <p
          className={activeTab === "Signup" && "active"}
          onClick={() => setActiveTab("Signup")}
        >
          Signup
        </p>
      </div>
      <div>{activeTab === "Signin" ? <Signin /> : <Signup />}</div>
    </div>
  );
}

export default App;
