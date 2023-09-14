import {  Routes, Route,BrowserRouter } from "react-router-dom";
//import ShowAutoparts from "./Components/ShowAutoparts";
import ShowCategory from "./Components/ShowCategory"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
       // <ShowAutoparts></ShowAutoparts>||
        <ShowCategory></ShowCategory>
        }>
           </Route>
      </Routes>
    </BrowserRouter>
  )
}

  export default App;