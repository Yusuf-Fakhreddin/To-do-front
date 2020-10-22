import React, { useEffect, useState } from "react";
import "./main.css";
import Theme from "./components/Theme/Theme";
import Toggler from "./components/Theme/Toggler";
import LoginForm from "./components/Forms/LoginForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Logout from "./components/Items/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Items/Grid/Home";

function App() {
  const [theme, setTheme] = useState("light-mode");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark-mode" ? "light-mode" : "dark-mode"
    );
    console.log(theme.toString());
    localStorage.setItem("theme", theme.toString());
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      console.log(savedTheme.toString());
    }
  }, []);

  return (
    <Theme theme={theme}>
      <Toggler clicked={toggleTheme} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
