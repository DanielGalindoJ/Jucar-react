import {  Routes, Route,BrowserRouter } from "react-router-dom";
import ShowAutoparts from "./Components/ShowAutoparts";
import ShowCategory from "./Components/ShowCategory";
import ShowSubCategory from "./Components/ShowSubCategory"
import Login from "../Components/Login.js"
import Menu from "../Components/Menu.js"


function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" exact element ={<Login/>}></Route>
      <Route path="/menu" exact element = {<Menu/>}></Route>
     <Route path="/Categoria" exact element={<ShowCategory/>}></Route>
     <Route path="/Autopartes" exact element={<ShowAutoparts/>}></Route> 
     <Route path="/SubCategoria" exact element = {<ShowSubCategory/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

  export default App;