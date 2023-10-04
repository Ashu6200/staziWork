import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleProperty from './pages/SingleProperty';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
