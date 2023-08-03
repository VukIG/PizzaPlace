import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="font-[Inter] bg-stone-200">
        <Header />
        <div className="">
          <Routes>
            <Route exact path="/" component={<Home />} />
            <Route exact path="/menu" component={<Menu />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
