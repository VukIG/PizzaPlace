import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="font-[Inter] bg-stone-200">
          <Header />
          <div className="">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
