
import './App.css'
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar.jsx";
import DisplayMember from "./pages/DisplayMember.jsx";
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
      <>
       <Router>
           <NavBar/>
           <Routes>
               <Route exact path="/" element=<DisplayMember/>/>
           </Routes>

       </Router>
      </>
  )
}

export default App
