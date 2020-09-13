import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./container/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      {/* react-router */}
    </div>
  );
}

export default App;
