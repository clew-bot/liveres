import React from "react";
import Sidebar from "./components/Sidenav";
import "rsuite/dist/styles/rsuite-default.css";
import Homepage from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>
        <div>
          <Sidebar />
          <Wrapper>
            <Route exact path="/" component={Homepage} />
          </Wrapper>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
