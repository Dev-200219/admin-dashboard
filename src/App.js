import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTable from "./Components/DataTable/DataTable";
import SingleItem from "./Components/SingleItem/SingleItem";
import NewPage from "./Components/NewPage/NewPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/users' element={<DataTable type='users'/>}/>
          <Route exact path='/users/:id' element={<SingleItem type='users'/>}/>
          <Route exact path='/users/new' element={<NewPage type='users'/>}/>
          <Route exact path='/products' element={<DataTable type='products'/>}/>
          <Route exact path='/products/:id' element={<SingleItem type='products'/>}/>
          <Route exact path='/products/new' element={<NewPage type='products'/>}/>
          <Route exact path='/orders' element={<DataTable type='orders'/>}/>
          <Route exact path='/orders/:id' element={<SingleItem type='orders'/>}/>
         </Routes>
      </Router>
    </>
  );
}

export default App;
