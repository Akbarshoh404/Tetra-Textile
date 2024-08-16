import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Production from "./Pages/Production/Production";

import PreLoader from "./component/PreLoader";

function App() {
  return (
    <>
      <PreLoader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/production" element={<Production />} />
      </Routes>
    </>
  );
}

export default App;
