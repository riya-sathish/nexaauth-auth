import {Routes, Route} from "react-router-dom";
import Signup  from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

const App = () => {
  return (
<Routes>
<Route path="/" element = {<Signup/>}/>
<Route path="/login" element = {<Login />}/>
</Routes>


  );
}
export default App ;
