import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./container/SideBar/SideBar";
import ChatRooms from "./container/ChatRooms/ChatRooms";
import Login from "./authentication/Login/Login";
import { Route, Switch } from "react-router-dom";
import { useStateValue } from "./ContextAPI/StateProvider";
import "./App.css";
function App() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) {
    return <Login />;
  }
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Switch>
          <Route path="/room/:roomId" component={ChatRooms} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
