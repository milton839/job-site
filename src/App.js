
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import DashboardNav from './Components/Dashboard/Dashboard/DashboardNav';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import Leads from './Components/Dashboard/DashboardPage/Leads';
import Contacts from './Components/Dashboard/DashboardPage/Contacts';
import Deals from './Components/Dashboard/DashboardPage/Deals';
import Accounts from './Components/Dashboard/DashboardPage/Accounts';
import EditProfile from './Components/Dashboard/EditProfile/EditProfile';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <DashboardNav></DashboardNav>
          </Route>
          <Route path="/leads">
            <Leads></Leads>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/accounts">
            <Accounts></Accounts>
          </Route>
          <Route path="/edit-profile">
            <EditProfile></EditProfile>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
