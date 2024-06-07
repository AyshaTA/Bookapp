import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import Search from './components/Search';
import Delete from './components/Delete';
import VeiwAllBook from './components/VeiwAllBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>}></Route>
      <Route path='/Search' element={<Search/>}></Route>
      <Route path='/Delete' element={<Delete/>}></Route>
      <Route path='/VeiwAll' element={<VeiwAllBook/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
