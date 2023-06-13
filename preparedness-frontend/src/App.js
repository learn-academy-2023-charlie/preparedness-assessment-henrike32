import React from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  return (
    <div className="App-header" >
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input />
        </div>
        <br></br>
        <div className="button-group">
          <Button>Click Me</Button>
          <Button>Reset</Button>
        </div>
        <div className="App-footer">
          <span className="footer-text"> &copy; Henrique Lambertucci </ span>
        </div>
        <ModalComponent />
      </div>
    </div>
  )
}

export default App
