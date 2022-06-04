import React from "react";
import { useState } from "react"
import Main from "./pages/Main";

export default () => {

  const [user, setUser] = useState(null)

  return(
  <div className="App">
    <Main/>
  </div>

  )
}

