import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Hero from "./components/hero";
import Album from "./components/album";
import Bio from "./components/bio";
import NewRelease from "./components/newRelease";
import Videos from "./components/videos";
import Events from "./components/events";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Album />
      <Bio />
      <NewRelease />
      <Videos />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
