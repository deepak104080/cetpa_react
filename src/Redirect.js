import React from "react";
import { useLocation } from "react-router-dom";

const Redirect  = () => {
    const {state} = useLocation();
    console.log(state);
    return(
        <>
            <h2>Redirected Component</h2>
            <div>State data - {state.id}</div>
            <div>State data - {state.name}</div>
        </>
    )
}

export default Redirect;