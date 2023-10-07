import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import AppLayout from './ui/AppLayout';
import CartPage from './CartPage';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="/menu/card" element={<CartPage />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
