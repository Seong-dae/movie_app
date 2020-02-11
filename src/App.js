import React from "react"
import { HashRouter, Route} from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./components/Navigation"
import "./App.css"

// Link는 Router 안에서만 사용가능!!
// BrowserRouter은 해쉬처럼 url에 #이 안생김
function App() {
  return(
    <HashRouter> 
      <Navigation />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;