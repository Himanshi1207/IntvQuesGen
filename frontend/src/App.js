import "./App.css";
import AddQuestion from "./pages/AddQuestion";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";  

function App() {
    const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="App">
      <button onClick={()=>setIsOpen(true)}>Open modal</button>
      {isOpen && <LoginPage setIsOpen={setIsOpen}/>}
      {/* <div>
        <LoginPage />
        <SignupPage/>
        <AddQuestion/>
      </div> */}
    </div>
  );
}

export default App;
