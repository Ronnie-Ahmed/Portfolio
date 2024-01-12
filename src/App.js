import React from "react";
import { Aboutme } from "./Pages/Aboutme";
import { Contractme } from "./Pages/Contractme";
import { Experience } from "./Pages/Experience";
import { Services } from "./Pages/Services";
import { Work } from "./Pages/Work";
import { Nav } from "./Components/Nav";
function App() {
  return (
    <div className="bg-gradient-to-b  font-tektur from-gray-700 via-gray-500 to-gray-700 pt-4 px-4 ">
      <Nav />
      <div className="flex flex-col  mt-12">
        <Aboutme />
        <Experience />
        <Services />
        <Work />
        <Contractme />
      </div>
    </div>
  );
}

export default App;
