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
import Wagubumbuzi from "../components/wagubumbuzi/Wagubumbuzi";
import Reset from "../components/auth/Reset";
import Login from "../components/auth/Login";
import PrivateRoute from "../utils/PrivateRoute";
import PrivateAuth from "../utils/PrivateAuth";
import Contact from "../components/contact/Contact";
import Archives from "../components/archives/Archives";

import NewPassword from "../components/auth/NewPassword";


function index() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/api/auth/reset_password/:keyId/:keyToken"
            element={<NewPassword />}
          />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />}>
            <Route index element={<HomeComponent />} />
            <Route path="users/:key" element={<UserComponent />} />
            <Route path="detail/:key/:id" element={<Users />} />
            <Route path="reports/:key" element={<Report />} />
            <Route path="loans/:key" element={<Loan />} />
            <Route path="savings/:key" element={<Savings />} />
            <Route path="wagubumbuzi/:key" element={<Wagubumbuzi />} />
            <Route path="payment/:key" element={<Payment />} />
            <Route path="borrowers/:key" element={<Borrowers />} />
            <Route path="contact/:key" element={<Contact />} />
            <Route path="archives/:key" element={<Archives />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default index;
