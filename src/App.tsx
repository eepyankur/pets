import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Search from "./components/Search.tsx";
import Home from "./pages/Home.tsx";
import PetDetails from "./components/PetDetails.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="h-dvh w-dvw overflow-auto p-10 font-jetBrainsMono">
          <NavBar />
          <Search />
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
