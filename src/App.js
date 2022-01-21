import "./App.css";
import Dashboard from "./components/leads/Dashboard";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import logo from "./logo.svg";
import { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import Alert from "./components/layout/Alert";

function App() {
  return (
    <div className="App">
      <Alert />
      <Router>
        <Fragment>
          <Header logo={logo} />
          <div className="container mx-auto">
            <Routes>
              <Route path="" exact element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="login" exact element={<Login />} />
              <Route path="register" exact element={<Register />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
