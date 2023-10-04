import { useDispatch, useSelector } from 'react-redux';
import { setProperties } from '../context/propertiesSlice';
import { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import PropertList from '../components/PropertList';

const Home = () => {
  const dispatch = useDispatch();
  const activeCity = useSelector((state) => state.properties.activeCity);
  const properties = useSelector((state) => state.properties.properties);
  const [value, setValue] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/properties.json');
        const data = await response.json();
        dispatch(setProperties(data));
      } catch (error) {
        console.error('Error fetching properties: ', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const filteredProperties = properties.filter(
    (property) => property.city === activeCity
  );
  const p = useMemo(() => {
    return filteredProperties.slice(0, filteredProperties.length - value);
  }, [filteredProperties, value]);
  return (
    <div className='flex flex-col gap-[20px] items-center'>
      <h1 className='text-[#2E4374] text-center text-[34px] font-[600]'>
        Featured Listed Property
      </h1>
      <p className='text-center font-[600]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        cumque totam corporis excepturi doloremque eum assumenda exercitationem
        ab sapiente! Fugiat maxime doloribus dolorem fugit ea id non facere
        nesciunt? Libero.
      </p>

      <Header
        cities={['New York', 'Mumbai', 'Paris', 'London']}
        activeCity={activeCity}
      />
      <PropertList properties={p} />
      {value == 3 ? (
        <>
          <button
            className='text-[14px] text-white bg-[#2E4374] max-w-fit py-[10px] px-[20px] rounded-[10px]'
            onClick={() => setValue(0)}
          >
            Show More
          </button>
        </>
      ) : (
        <>
          <button
            className='text-[14px] text-white bg-[#2E4374] max-w-fit py-[10px] px-[20px] rounded-[10px]'
            onClick={() => setValue(3)}
          >
            Show less
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
