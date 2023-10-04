/* eslint-disable react/prop-types */

import PropertyCard from './PropertyCard';

const PropertList = ({ properties }) => {
  return (
    <div className='gridStyle'>
      {properties.map((p) => {
        return <PropertyCard key={p.id} item={p} />;
      })}
    </div>
  );
};

export default PropertList;
