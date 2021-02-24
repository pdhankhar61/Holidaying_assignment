import React from 'react';

const RestaurantCard = ({restaurant}) => {
    return ( <div className="max-w-sm rounded overflow-hidden shadow-lg ">
    <img
      src={restaurant.image}
      alt=""
      className="w-full"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2">
        {restaurant.name}
      </div>
      <ul>
        <li>
          <strong>Ratings: </strong>{restaurant.rating}
        </li>
        <li>
          <strong>Description: </strong>{restaurant.description}
        </li>
        
      </ul>
    </div>
    
  </div> );
}
 
export default RestaurantCard;