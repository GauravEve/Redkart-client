
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <div>
          
      <Routes>
        <Route  exact path='/cart' element={<Cart/>}/>
        <Route  exact path='/' element={<Home/>}/>
      </Routes>
         
    </div>
  );
}

export default App;
