import React from "react";
import { useHistory } from "react-router-dom";




function Home(props) {
    const history = useHistory();
    return(
      <div className="home-wrapper">
      <img
      className="home-image"
      src="https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg"
    alt="Pizza"
    />
     <button
        className="Pbutton"
        onClick={() => history.push("/items")}
      >
       Order Your Pizza!
      </button>
    </div>
    )
}
export default Home;






