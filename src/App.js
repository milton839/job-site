
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Accounts from './Components/Dashboard/DashboardPage/Accounts';
import AddJob from './Components/Dashboard/DashboardPage/AddJob';
import Contacts from './Components/Dashboard/DashboardPage/Contacts';
import Deals from './Components/Dashboard/DashboardPage/Deals';
import EditProfile from './Components/Dashboard/EditProfile/EditProfile';
import Home from './Components/Home/Home/Home';
import JobDetails from './Components/Home/Home/JobDetails';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/jobDetails/:jobId">
            <JobDetails />
          </Route>
          <Route path="/addJob">
            <AddJob />
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
            <EditProfile />
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
