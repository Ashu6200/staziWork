import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { setCars } from './context/carSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/cars.json');
        const data = await response.json();
        dispatch(setCars(data));
      } catch (error) {
        console.error('Error fetching properties: ', error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className='w-full bg-[#fff] '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page/:page' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
