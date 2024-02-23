import { useState } from "react";
import { UserContext } from "./UserContext";
import Nav from "./components/Nav";
import Info from "./components/Info";

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <div className="h-screen w-screen max-h-full max-w-full bg-dark">
        <div className="container mx-auto flex flex-col md:flex-row lg:flex-row h-full justify-start md:justify-center lg:justify-center">
          <UserContext.Provider value={{ selectedIndex, setSelectedIndex }}>
            <Nav />
            <Info />
          </UserContext.Provider>
        </div>
      </div>
    </>
  );
}
