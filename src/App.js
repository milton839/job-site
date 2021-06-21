
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import MakeAdmin from './Components/Admin/AdminPage/MakeAdmin';
import PendingJob from './Components/Admin/AdminPage/PendingJob';
import AddJob from './Components/Dashboard/DashboardPage/AddJob';
import CandidateList from './Components/Dashboard/DashboardPage/CandidateList';
import ApplyForm from './Components/Home/Home/ApplyForm';
import Home from './Components/Home/Home/Home';
import JobDetails from './Components/Home/Home/JobDetails';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PaymentEmployer from './Components/PaymentEmployer/PaymentEmployer';
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
          <PrivateRoute path="/addJob">
            <AddJob />
          </PrivateRoute>
          <PrivateRoute path="/applyForm">
            <ApplyForm />
          </PrivateRoute>
          <PrivateRoute path="/candidate">
            <CandidateList />
          </PrivateRoute>
          <PrivateRoute path="/pendingJob">
            <PendingJob />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <PaymentEmployer />
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
