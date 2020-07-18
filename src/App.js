import React, {useState} from "react";
import { Route, Link} from "react-router-dom";
import Home from "./components/Home"
import Form from "./components/Form"


const App = () => {
  const [items, setItems] = useState(Form);
  return (
    <div className="App">

    <nav>
        <h1 className="pizza header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>  
          <Link to="/items">Help</Link>  
        </div>
      </nav>


{/* <Link to="/form"><button className="pizza pic">Order Your Pizza</button></Link> */}
      
      <Route exact path="/" component={Home}/> 
      <Route exact path="/items" component={Form}/>     
    </div>


  );
};
export default App;
