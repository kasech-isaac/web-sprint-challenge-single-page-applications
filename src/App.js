import React from "react";
import { Route, Link} from "react-router-dom";
import home from "./components/form"
import form from "./components/form"


const App = () => {
  
  return (
    <div className="App">

    <nav>
        <h1 className="pizza header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/"><button>Home</button></Link>  
          <Link to="/form"><button>Help</button></Link>  
        </div>
      </nav>


{/* <Link to="/form"><button className="pizza pic">Order Your Pizza</button></Link> */}
      
      <Route exact path="/" component={home}/> 
      <Route exact path="/form" component={form}/>     
    </div>


  );
};
export default App;
