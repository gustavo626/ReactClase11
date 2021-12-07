import './style.css'
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-roter-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartContex';
import { DarkMode, DarkModeProvider } from './context/DarckModeContext';



function App() {



  return (

    <DarkModeProvider>
      
      <CartProvider>

      <BrowserRouter>

      <NavBar/>
      <AppRouter/>
    
      </BrowserRouter>

      </CartProvider>

      </DarkModeProvider>

  );

}

export default App;
