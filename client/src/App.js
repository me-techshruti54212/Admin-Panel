import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import ListUser from "./pages/List Users/ListUsers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listusers" element={<ListUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;