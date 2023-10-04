/* eslint-disable react/prop-types */

import { AiOutlineHeart } from 'react-icons/ai';
import { BiArea } from 'react-icons/bi';
import { FaHotel } from 'react-icons/fa';
import { MdBathroom, MdHotel, MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PropertyCard = ({ item }) => {
  return (
    <div className='w-full bg-white rounded-2xl'>
      <div className='p-[20px]'>
        <div className='relative'>
          <div className='absolute flex  items-center justify-between w-full top-2 px-[10px]'>
            <div className='bg-white rounded-2xl'>
              <p className='font-[600] text-[#362FD9] py-[5px] px-[10px] '>
                Rent Now
              </p>
            </div>
            <div className='bg-white rounded-2xl py-[5px] px-[10px]'>
              <AiOutlineHeart className='text-[16px] font-[600] text-[#362FD9]' />
            </div>
          </div>
          <img src={item.image} alt='' />
        </div>
        <div className='flex gap-1 items-center mt-[10px]'>
          <MdLocationPin />
          <p className='text-[14px] font-[500]'> {item.location}</p>
        </div>
        <p className='text-[#2E4374] font-[600] '>{item.name}</p>
        <div className='flex items-center justify-between my-[20px] border-dashed border-b-[1px] pb-[10px]'>
          <div className='flex flex-col gap-2 border-dashed border-r-[1px] w-full px-[10px]'>
            <FaHotel />
            <p className='text-[14px] font-[600]'>{item.rooms} room</p>
          </div>
          <div className='flex flex-col gap-2 border-r-[1px] w-full px-[10px]'>
            <MdHotel />
            <p className='text-[14px] font-[600]'>{item.bed} Bed</p>
          </div>
          <div className='flex flex-col gap-2 border-r-[1px] w-full px-[10px]'>
            <MdBathroom />
            <p className='text-[14px] font-[600]'>{item.bathroom} Bath</p>
          </div>
          <div className='flex flex-col gap-2 w-full px-[10px]'>
            <BiArea />
            <p className='text-[14px] font-[600]'>{item.roomSize} sft</p>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-[600] text-[#362FD9] py-[5px] px-[10px] text-[14px]'>
              ${item.price}
              <span className='font-[600] text-black text-[12px]'>/month</span>
            </p>
          </div>
          <Link to={`/${item.id}`}>
            <div className='bg-white rounded-2xl border-[#362FD9] border-[1px]'>
              <p className='font-[600] text-[#362FD9] py-[5px] px-[10px] text-[14px]'>
                Read More
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
