/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux';
import { setActiveCity } from '../context/propertiesSlice';

const Header = ({ cities, activeCity }) => {
  const dispatch = useDispatch();
  return (
    <div className='mt-[80px] flex items-center gap-5 w-full'>
      {cities.map((city) => (
        <div
          key={city}
          className={`${
            city === activeCity ? 'bg-[#2E4374] text-white' : 'bg-[#6499E9]'
          } py-[10px] px-[20px] rounded-[10px] cursor-pointer `}
          onClick={() => dispatch(setActiveCity(city))}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default Header;
