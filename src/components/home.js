import React from "react";
import { useHistory } from "react-router-dom";

function home(props) {
    const history = useHistory();
    return(
        <div className="home">
     
     <button
        className="md-button"
        onClick={() => history.push("/forms")}
      >
       Order Your Pizza!
      </button>
    </div>
    )
}






export default home;