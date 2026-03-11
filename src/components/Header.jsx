import { useState, useEffect } from "react";
import Switch from "./Switch";  

export default function Header() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(mode);
  }, [mode]);

  return (
    <>
      <header>
        <img src="robot_chef.png" className="logo" alt="ChefRobot" />
        <h1>Chef AI</h1>
        <Switch mode={mode} toggleMode={toggleMode} />
      </header>
    </>
  );
}
