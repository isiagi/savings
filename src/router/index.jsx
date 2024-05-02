import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import HomeComponent from "../components/home/Home";
import Report from "../components/report/Report";
import Loan from "../components/loan/Loan";
import Savings from "../components/savings/Savings";
import UserComponent from "../components/users/User";
import Users from "../components/users/Users";
import Borrowers from "../components/borrowers/Borrowers";
import Payment from "../components/payment/Payment";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeComponent />} />
          <Route path="/users/:key" element={<UserComponent />} />
          <Route path="/detail/:key" element={<Users />} />
          <Route path="/reports/:key" element={<Report />} />
          <Route path="/loans/:key" element={<Loan />} />
          <Route path="/savings/:key" element={<Savings />} />
          <Route path="/payment/:key" element={<Payment />} />
          <Route path="/borrowers/:key" element={<Borrowers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default index;
