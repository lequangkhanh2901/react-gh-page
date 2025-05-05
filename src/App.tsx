import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Setting from "./pages/Setting";

function App() {
  return (
    <div>
      this is my app
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
