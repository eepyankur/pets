import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import PetDetails from "./components/PetDetails.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="relative h-full w-full min-w-[400px] p-10 font-jetBrainsMono md:p-20">
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/details"} element={<PetDetails />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
