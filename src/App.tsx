import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Budget from "./pages/Budget";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/budgets" />} />
        <Route path="/budgets" element={<Budget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
