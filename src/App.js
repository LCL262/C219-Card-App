import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CardList from "./pages/CardList";
import AddCard from "./pages/AddCard";
import EditCard from "./pages/EditCard";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/allcards" element={<CardList />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/editcard/:id" element={<EditCard />} />
        <Route path="*" element={<Navigate to="/" />} />
=======
        <Route path="/cards" element={<CardList />} />
        {/* TODO: Complete the routes */}
        <Route path="/addCards" element={<AddCard />} />
        <Route path="/editCards" element={<EditCard />} />
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
      </Routes>
    </BrowserRouter>
  );
}
