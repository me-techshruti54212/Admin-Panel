import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import ListUsers from "./pages/List Users/ListUsers";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageTemplates from "./pages/ManageTemplates/ManageTemplates";
import EditTemplate from "./pages/EditTemplate/EditTemplate";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ConnectionRequests from "./pages/ConnectionRequests/ConnectionRequests";
import ReportedPosts from "./pages/ReportedPost/ReportedPost";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<ListUsers />} />
        <Route path="/users/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-templates" element={<ManageTemplates/>} />
        <Route path="/edit-template" element={<EditTemplate/>} />
        <Route path="/change-password" element={<ChangePassword/>} />
        <Route path="/connection-requests" element={<ConnectionRequests/>}/>
        <Route path="/reported-post" element={<ReportedPosts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;