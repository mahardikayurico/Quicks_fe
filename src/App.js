import "./index.css";
import { HomePages, ChatPages, TaskPages } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/chat" element={<ChatPages />} />
        <Route path="/task" element={<TaskPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
