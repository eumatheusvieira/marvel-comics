import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/Home/Home.tsx";
import Profile from "./assets/Profile/Profile.tsx";
import './index.css'
import Search from "./assets/SearchResults/SearchResults.tsx";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search-results" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}