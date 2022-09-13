import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './components/routes/HomePage/Index';
import CartPage from './components/routes/CartPage/Index';
import NotFoundPage from './components/routes/NotFoundPage/Index';

function App() {
  return (
    <>
    <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/cart'} element={<CartPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
    </Routes>
    </>
  );
}
 
export default App;
