import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Dashboard from "../features/Dashboard/Dashboard";
import HomePage from "../features/Homepage/Homepage";
import ChangePassword from "../features/Auth/ChangePassword";
import ResetPassword from "../features/Auth/ResetPassword";
import Login from "../features/Auth/Login";
import NavbarDesktop from "../Components/NavbarDesktop";

const Routes = () => {
  return (
    <>
      <NavbarDesktop />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" element={<HomePage />} index />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/change_password" element={<ChangePassword />} />
            <Route path="/reset_password" element={<ResetPassword />} />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
};

export default Routes;
