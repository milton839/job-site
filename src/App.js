
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import MakeAdmin from './Components/Admin/AdminPage/MakeAdmin';
import PendingJob from './Components/Admin/AdminPage/PendingJob';
import Accounts from './Components/Dashboard/DashboardPage/Accounts';
import AddJob from './Components/Dashboard/DashboardPage/AddJob';
import CandidateList from './Components/Dashboard/DashboardPage/CandidateList';
import EditProfile from './Components/Dashboard/EditProfile/EditProfile';
import ApplyForm from './Components/Home/Home/ApplyForm';
import Home from './Components/Home/Home/Home';
import JobDetails from './Components/Home/Home/JobDetails';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/jobDetails/:jobId">
            <JobDetails />
          </PrivateRoute>
          <Route path="/addJob">
            <AddJob />
          </Route>
          <Route path="/applyForm">
            <ApplyForm />
          </Route>
          <Route path="/candidate">
            <CandidateList />
          </Route>
          <Route path="/pendingJob">
            <PendingJob />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
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
