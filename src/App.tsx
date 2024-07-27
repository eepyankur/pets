import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className={"font-jetBrainsMono h-dvh w-dvw overflow-auto p-10"}>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
