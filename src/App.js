import React from "react"
import { HashRouter, Route} from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"
import "./App.css"

// Link는 Router 안에서만 사용가능!!
// BrowserRouter은 해쉬처럼 url에 #이 안생김
// Route 로 가는 component들은 props가 있따!!
function App() {
  return(
    <HashRouter> 
      <Navigation />
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default App;