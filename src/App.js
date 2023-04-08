import "./index.css";
import { CustomerPages } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
