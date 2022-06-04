import React from "react";
import { useState } from "react"
import Main from "./pages/Main";
import Nav from "./components/Nav";

export default () => {

  const [user, setUser] = useState(null)

  return(
  <div className="App">
    <Main/>
    <Nav></Nav>
  </div>

  )
}

