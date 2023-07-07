// import React from 'react'
// import App from './App.jsx'
// import './index.css'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import React from "react"
import Info from "./Info.jsx"
import About from "./About.jsx"
import Interest from "./Interest.jsx"
import Footer from "./Footer.jsx"
import Style from "./Style.css"


function App(){
    return <div className="body"><Info/>
            <About/>
            <Interest/>
            <Footer/>
            </div>
}



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  