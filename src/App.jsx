import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="font-[Inter] bg-stone-200">
          <Header />
          <div className="">
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
