import React from "react";
import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Login from "./pages/login";
import Signup from "./pages/signup";
import "./App.css";

export const GlobalCtx = React.createContext(null);

function App() {
  const [gState, setGState] = React.useState({
    url: "http://localhost:3000/",
    token: null,
    ready: false,
  });

  //Check if user is logged in
  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
      setGState({ ...gState, token: token.token, ready: true });
    } else {
      setGState({ ...gState, token: null, ready: true });
    }
  }, []);

  return (
    <div className="App">
      <GlobalCtx.Provider value={{ gState, setGState }}>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/" element={<Characters />} />
        </Routes>
      </GlobalCtx.Provider>
    </div>
  );
}

export default App;
