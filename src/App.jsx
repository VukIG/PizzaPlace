import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import AppLayout from './ui/AppLayout';
import MenuDetails from './MenuDetails';
import CardPage from './CardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/menu/details/:id" element={<MenuDetails />} />
          <Route path="/menu/card" element={<CardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
