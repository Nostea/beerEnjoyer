import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllBeers from "./pages/AllBeers/AllBeers";
import DetailPage from "./pages/DetailPage/DetailPage";
import RandomBeer from "./pages/RandomBeer/RandomBeer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbeers" element={<AllBeers />} />
          <Route path="/allbeers/:id" element={<DetailPage />} />
          <Route path="/allbeers/random" element={<RandomBeer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
