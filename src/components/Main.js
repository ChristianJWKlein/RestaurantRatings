import { useState } from 'react';
import RestaurantList from './RestaurantList';

export default function Main() {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <>
      <section style={{ background: 'white', padding: '0 40px 40px' }}>
        <RestaurantList
          restaurants={restaurants}
          setRestaurants={setRestaurants}
        />
      </section>
    </>
  );
}
