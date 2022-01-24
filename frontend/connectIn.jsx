import React from "react";
import reactDom from "react-dom";
import Root from './components/root'
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root")
    const store = configureStore();

    window.store = store;
    
    reactDom.render(
        <Root store={store}/>,
        root
    )
})