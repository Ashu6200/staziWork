import { useSelector } from 'react-redux';
import CarCard from '../components/CarCard';
import Pagination from '../components/Pagination';
import { useParams } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const { page } = useParams();
  const cars = useSelector((state) => state.car.cars);
  const [data, setData] = useState([]);
  const itemsPerPage = 6;
  const totalPages = 10;
  const currentPage = parseInt(page || 1);
  const [searchQuery, setSearchQuery] = useState('');

  const appysearch = useCallback(() => {
    let updatedCars = [...cars];
    if (searchQuery) {
      updatedCars = updatedCars.filter(
        (item) =>
          item.carName
            .toLowerCase()
            .search(searchQuery.toLowerCase().trim()) !== -1
      );
    }
    setData(updatedCars);
  }, [cars, searchQuery]);

  useEffect(() => {
    appysearch();
  }, [appysearch]);

  const paginatedCars = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleSeacrh = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <SearchBar searchQuery={searchQuery} onSearch={handleSeacrh} />
      <div className='mx-[80px] my-[40px]'>
        <div className='addGrid'>
          {paginatedCars.map((car, i) => {
            return <CarCard key={i} car={car} />;
          })}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default Home;
