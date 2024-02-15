import NavBar from "./components/NavBar";
import backgroundImg from "./Background.jpeg";
import ExteriorLinks from "./components/ExteriorLinks";

import { Outlet } from "react-router-dom";

function App() {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "left bottom",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    position: "fixed",
    width: "100%",
    zIndex: "-1",
  };
  const contentStyle = {
    minHeight: "100vh",
    overflowY: "auto",
  };

  return (

      <div style={backgroundStyle}>
        <NavBar backgroundStyle={backgroundStyle} />
        <div style={contentStyle}>
          <Outlet />
          <ExteriorLinks />
        </div>
        <footer className="mt-4 text-xs">Made by Kirstyn Canull</footer>
      </div>
  );
}

export default App;
