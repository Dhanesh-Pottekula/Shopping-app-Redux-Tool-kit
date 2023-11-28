
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import RootLayout from './pages/RootLayout';
import Electronics from './pages/Electronics';
import Clothes from './pages/Clothes';
import Home from './pages/Home';
import Furniture from './pages/Furniture';
import Shoes from './pages/Shoes';
import Miscellaneous from './pages/Miscellaneous';
function App() {
  return (
    <BrowserRouter>
      <Routes >
      <Route path="/" element={<RootLayout/>}>
         <Route path="/" element={<Home/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Electronics" element={<Electronics/>}/>
        <Route path="/Clothes" element={<Clothes/>}/>
        <Route path="/Furniture" element={<Furniture/>}/>

        <Route path="/Miscellaneous" element={<Miscellaneous/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
      </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
