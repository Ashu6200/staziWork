/* eslint-disable react/prop-types */
import { BiSearch } from 'react-icons/bi';

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <div className='bg-[#fff] mx-[80px] rounded-[15px] glass'>
      <div className='p-[20px]'>
        <div className='h-[40px] bg-white max-w-fit rounded-[15px] px-3 flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={onSearch}
            className='h-full rounded-[15px] w-[250px] outline-0 border-none'
          />
          <button>
            <BiSearch className='text-[24px] text-[#4B527E]' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
