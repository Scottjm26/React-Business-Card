import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info.jsx"
import About from "./About.jsx"
import Interest from "/Interest.jsx"
import Footer from "/Footer.jsx"


function App(){
    return <div className="body"><Info/>
            <About/>
            <Interest/>
            <Footer/>
            </div>
}


ReactDOM.render(<App/>, document.getElementById("root"))