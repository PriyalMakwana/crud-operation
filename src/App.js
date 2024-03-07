import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/create' element={<Create></Create>}/>
    <Route path='/update/:id' element={<Update></Update>}/>
    <Route path='/read/:id' element={<Read></Read>}/>
   </Routes>
   </BrowserRouter> 
  );
}

export default App;
