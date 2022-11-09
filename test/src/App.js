import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Members from "./pages/Members/Members";
import Add from "./pages/Add/Add";
import Error from "./pages/Error/Error";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/add" element={<Add />} />
        <Route path="/members/id" element={<Modal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;