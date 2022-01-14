import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Register,
  Login,
  Update,
} from "./views"
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
