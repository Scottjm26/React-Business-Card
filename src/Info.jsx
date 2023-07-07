import React from "react"
import cat from "./josh.jpg"
 
 export default function Info (){
     return <div className ="info" >
                <img className ="cat-image" src={cat} alt="cat" />;
                <h1>Joshua Scott</h1>
                <h2>Aspiring Frontend Developer</h2>
                <p className ="website">Joshua.website</p>
                <a className ="email-button" href="scottjm@nsuok.edu">Email</a>
            </div>
 }