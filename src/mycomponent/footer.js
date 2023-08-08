import React from "react";
export default function Footer(){
    let x={
        position:"relative",
        top:"100vh",
        width:"100%"
    }
    return(
<footer className="text-center bg-dark text-light py-3" style={x}>
Copyright &copy;
</footer>
    )
}