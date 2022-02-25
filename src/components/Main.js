import { useState } from 'react';

import '../App.css';
import RestaurantList from './RestaurantList';

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <>
      <section className='card-wrapper'>
        <RestaurantList
          restaurants={restaurants}
          setRestaurants={setRestaurants}
        />
      </section>
    </>
  );
}
