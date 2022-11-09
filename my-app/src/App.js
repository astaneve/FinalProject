import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Members from "./pages/Members";
import AddMemberForm from "./pages/AddMemberForm";
import Add from "./pages/Add";
import List from "./pages/List";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<AddMemberForm />} />
    <Route path="/a" element={<Add />} />
    <Route path="/members" element={<Members />} exect />
    <Route path="*" element={<Error />} />
    <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default App;
