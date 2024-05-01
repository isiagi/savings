import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeComponent from "../components/home/Home";
import Report from "../components/report/Report";
import Loan from "../components/loan/Loan";
import Savings from "../components/savings/Savings";
import UserComponent from "../components/users/User";
import Users from "../components/users/Users";
import Borrowers from "../components/borrowers/Borrowers";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeComponent />} />
          <Route path="/users" element={<UserComponent />} />
          <Route path="/detail" element={<Users />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/loans" element={<Loan />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/borrowers" element={<Borrowers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default index;
