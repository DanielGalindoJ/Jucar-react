import {  Routes, Route,BrowserRouter } from "react-router-dom";
import ShowAutoparts from "./Components/ShowAutoparts";
import ShowCategory from "./Components/ShowCategory";
import ShowSubCategory from "./Components/ShowSubCategory"
import menu from "./Components/menu";
import login from "./Components/login";


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/menu" exact element = {menu}></Route>
      <Route path="/login" exact element ={login}></Route>
     <Route path="/Categoria" exact element={<ShowCategory></ShowCategory>}></Route>
     <Route path="/Autopartes" exact element={<ShowAutoparts></ShowAutoparts>}></Route> 
     <Route path="/SubCategoria" exact element = {<ShowSubCategory></ShowSubCategory>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

  export default App;