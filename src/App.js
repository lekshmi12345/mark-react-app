import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Student from './Components/Student';
import View from './Components/View';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Student/>}/>
    <Route path='/view' exact element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
