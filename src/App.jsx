import Header from "./Header";
import Home from "./Home";
import Menu from "./Menu";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Menu />} />
      </Route>,
    ),
  );
  return (
    <div className="font-[Inter] bg-stone-200">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () =>{
  return (
    <>
      <Header />
      <div className="">
        <Home />
        <Menu />
      </div>
    </>
  )
}

export default App;
