
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar.jsx";
import AddUser from "./users/AddUser.jsx";
import DisplayMember from "./pages/DisplayMember.jsx";
import {BrowserRouter as Router,Routes,Route}  from "react-router-dom";
import Home from "./pages/Home.jsx";
import EditUser from "./users/EditUser.jsx";
import View from "./users/View.jsx";
import DisplayBooks from "./pages/DisplayBooks.jsx";


function App() {
  return (
      <>
       <Router>
           <NavBar/>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route exact path="/display" element={<DisplayMember/>}/>
               <Route exact path="/adduser" element={<AddUser/>}/>
               <Route exact path="/edituser/:id" element={<EditUser/>}/>
               <Route exact path="/view/:id" element={<View/>}/>
               <Route exact path="/displaybooks" element={<DisplayBooks/>}/>
           </Routes>

       </Router>
      </>
  )
}

export default App
