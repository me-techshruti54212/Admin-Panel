import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import ListUser from "./pages/List Users/ListUsers";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageTemplates from "./pages/ManageTemplates/ManageTemplates";
import EditTemplate from "./pages/EditTemplate/EditTemplate";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listusers" element={<ListUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-templates" element={<ManageTemplates/>} />
        <Route path="/edit-template" element={<EditTemplate/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;