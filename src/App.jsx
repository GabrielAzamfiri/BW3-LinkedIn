import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import LinkedInNavbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <LinkedInNavbar />
      <div className="content"></div>
    </div>
  );
};

export default App;
