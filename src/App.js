import HomePage from './pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import AppRoutes from './Routes';
function App() {
  return (
    <BrowserRouter>
    <Route component={AppRoutes}/>
    </BrowserRouter>
  );
}

export default App;
