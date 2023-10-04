import { useMemo } from 'react';
import { BiArea } from 'react-icons/bi';
import { FaHotel } from 'react-icons/fa';
import { MdBathroom, MdHotel, MdLocationPin } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProperty = () => {
  const { id } = useParams();
  const properties = useSelector((state) => state.properties.properties);
  const property = useMemo(() => {
    return properties.find((prop) => prop.id === parseInt(id));
  }, [id, properties]);
  return (
    <>
      <h1 className='text-[#2E4374] text-center text-[34px] font-[600]'>
        Featured Listed Property
      </h1>
      <p className='text-center font-[600]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        cumque totam corporis excepturi doloremque eum assumenda exercitationem
        ab sapiente! Fugiat maxime doloribus dolorem fugit ea id non facere
        nesciunt? Libero.
      </p>
      <div className='flex justify-center gap-4 mt-[50px]'>
        <img src={property.image} alt='' className='w-[50%] rounded-[15px]' />
        <div className='w-[50%]'>
          <div className='flex gap-1 items-center mt-[10px]'>
            <MdLocationPin />
            <p className='text-[14px] font-[500]'> {property.location}</p>
          </div>
          <h1 className='text-[#2E4374] font-[600] text-[34px]'>
            {property.name}
          </h1>
          <p className='text-[#2E4374] font-[600] '>{property.description}</p>
          <div className='flex items-center justify-between my-[20px] border-dashed border-b-[1px] pb-[10px]'>
            <div className='flex flex-col gap-2 border-dashed border-r-[1px] w-full px-[10px]'>
              <FaHotel />
              <p className='text-[14px] font-[600]'>{property.rooms} room</p>
            </div>
            <div className='flex flex-col gap-2 border-r-[1px] w-full px-[10px]'>
              <MdHotel />
              <p className='text-[14px] font-[600]'>{property.bed} Bed</p>
            </div>
            <div className='flex flex-col gap-2 border-r-[1px] w-full px-[10px]'>
              <MdBathroom />
              <p className='text-[14px] font-[600]'>{property.bathroom} Bath</p>
            </div>
            <div className='flex flex-col gap-2 w-full px-[10px]'>
              <BiArea />
              <p className='text-[14px] font-[600]'>{property.roomSize} sft</p>
            </div>
          </div>
          <div>
            <p className='font-[600] text-[#362FD9] py-[5px] px-[10px] text-[18px]'>
              ${property.price}
              <span className='font-[600] text-black text-[16px]'>/month</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProperty;
