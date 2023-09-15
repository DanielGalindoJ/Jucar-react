import {  Routes, Route,BrowserRouter } from "react-router-dom";
import ShowAutoparts from "./Components/ShowAutoparts";
//import ShowCategory from "./Components/ShowCategory"
//import ShowSubCategory from "./Components/ShowSubCategory ";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
       <ShowAutoparts></ShowAutoparts>
        
        }>
           </Route>
      </Routes>
    </BrowserRouter>
  )
}

  export default App;