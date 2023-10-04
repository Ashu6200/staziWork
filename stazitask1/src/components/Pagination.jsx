import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Pagination({ currentPage, totalPages }) {
  return (
    <div className='flex gap-2 mt-4'>
      {currentPage > 1 && (
        <Link
          to={`/page/${currentPage - 1}`}
          className='py-[10px] px-[20px] bg-black text-white rounded-2xl'
        >
          &lt; Previous
        </Link>
      )}
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          key={index + 1}
          to={`/page/${index + 1}`}
          className={`${
            index + 1 === currentPage
              ? 'glass bg-white text-black'
              : 'bg-black text-white '
          } py-[10px] px-[20px] rounded-2xl`}
        >
          {index + 1}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          to={`/page/${currentPage + 1}`}
          className='py-[10px] px-[20px] bg-black text-white rounded-2xl'
        >
          Next &gt;
        </Link>
      )}
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
