import React from "react"
import ReactDOM from "react-dom"


const page = (
    <div>
    <img src="./react-logo.png" width="40 px"  />
    

    <h1> Fun facts about React </h1>
    <ul>
    <li> Was first released in 2013.</li>
    <li> Was originally created by Jordan Walke</li>
    <li> Has well over 100k stars on Github</li>
    <li> Is maintained by Facebook</li>
    <li>Power thousands of enterprise apps including mobile apps</li>
    </ul>
     </div>
)
ReactDOM.render(page,document.getElementById("root"))
