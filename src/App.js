
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import MakeAdmin from './Components/Admin/AdminPage/MakeAdmin';
import PendingJob from './Components/Admin/AdminPage/PendingJob';
import AddJob from './Components/Dashboard/DashboardPage/AddJob';
import CandidateList from './Components/Dashboard/DashboardPage/CandidateList';
import EmployeeBasicLogin from './Components/Employers/EmployeeBasicLogin';
import EmployeePremiumLogin from './Components/Employers/EmployeePremiumLogin';
import EmployeeStandardLogin from './Components/Employers/EmployeeStandardLogin';
import Employers from './Components/Employers/Employers';
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
          
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/jobDetails/:jobId">
            <JobDetails />
          </Route>
          <PrivateRoute path="/applyForm">
            <ApplyForm />
          </PrivateRoute>
          <Route path="/employers">
            <Employers />
          </Route>
          <PrivateRoute path="/payment">
            <PaymentEmployer />
          </PrivateRoute>
          <Route path="/employeePremiumLogin">
            <EmployeePremiumLogin />
          </Route>
          <Route path="/employeeStandardLogin">
            <EmployeeStandardLogin />
          </Route>
          <Route path="/employeeBasicLogin">
            <EmployeeBasicLogin />
          </Route>
          <PrivateRoute path="/addJob">
            <AddJob />
          </PrivateRoute>
          <PrivateRoute path="/candidate">
            <CandidateList />
          </PrivateRoute>
          <Route path="/pendingJob">
            <PendingJob />
          </Route>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
