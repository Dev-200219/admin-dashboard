import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./Components/Users/Users";
import SingleUser from "./Components/SingleUser/SingleUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/users' element={<Users/>}/>
          <Route exact path='/user/:id' element={<SingleUser/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
