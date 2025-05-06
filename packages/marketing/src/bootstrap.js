import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import faker from "faker"

const mount = (el)=>{
    ReactDOM.render(<App/>, el);
    // console.log(products)
    // el.innerHTML = products;
}

if(process.env.NODE_ENV === "development"){
    //assuming container do not have id dev-products used anywhere
    const el = document.querySelector("#dev-marketing");
    if(el){
        mount(el);
    }
}

export {mount};