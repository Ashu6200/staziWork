import {
  BsFillPeopleFill,
  BsFillFuelPumpFill,
  BsSpeedometer2,
} from 'react-icons/bs';
import { PiSteeringWheelBold } from 'react-icons/pi';
import { AiOutlineHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';

const CarCard = ({ car }) => {
  const { carImage, seater, fuelType, mileage, carType, rentPrice } = car;
  return (
    <div className='w-full bg-[#fff] glass'>
      <div className='p-[20px]'>
        <img
          src={carImage}
          alt=''
          className='h-[300px] w-full object-cover rounded-[15px]'
        />
        <div className='flex justify-between items-center mt-3'>
          <p className='text-[24px] font-[600] text-[#393E46]'>{car.carName}</p>
          <div className='border-[1px] border-dashed rounded-[15px]'>
            <p className='text-[18px] font-[600] text-[#393E46] py-1 px-4 rounded-[15px]'>
              {car.year}
            </p>
          </div>
        </div>
        <div className='add2grid my-3 border-b-2 border-black pb-3'>
          <div className='flex items-center gap-2'>
            <BsFillPeopleFill /> <p>{seater} People</p>
          </div>
          <div className='flex items-center gap-2'>
            <BsFillFuelPumpFill /> <p>{fuelType}</p>
          </div>
          <div className='flex items-center gap-2'>
            <BsSpeedometer2 /> <p>{mileage}</p>
          </div>
          <div className='flex items-center gap-2'>
            <PiSteeringWheelBold /> <p>{carType}</p>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-[24px] font-[600]'>
            ${rentPrice} <span className='text-[14px] font-[600]'>/month</span>
          </p>
          <div className='flex items-center gap-5'>
            <div className=' bg-black p-[10px] rounded-[15px]'>
              <AiOutlineHeart className='text-white text-[24px]' />
            </div>
            <div className=' bg-black p-[10px] rounded-[15px] px-[20px]'>
              <p className='text-white'>Rent Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CarCard.propTypes = {
  car: PropTypes.shape({
    carName: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    seater: PropTypes.number.isRequired,
    carImage: PropTypes.string.isRequired,
    fuelType: PropTypes.string.isRequired,
    mileage: PropTypes.string.isRequired,
    carType: PropTypes.string.isRequired,
    rentPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CarCard;
