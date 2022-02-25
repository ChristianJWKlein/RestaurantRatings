// import React, { useEffect, useState } from 'react';
// import { useNavigation } from 'react-router-dom';

// export default function RestaurantRating() {
//   const [buttonDisabled, setButtonDisabled] = useState(true);
//   const [newRating, setNewRating] = useState({});

//   const navigation = useNavigation();

//   useEffect(() => {
//     if (newRating.rating) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [newRating]);

//   const sendNewRestaurantRating = () => {
//     fetch('https://bocacode-intranet-api.web.app/restaurants', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newRating),
//     })
//       .then(() => alert('New Rating Added'))
//       .then(() => navigation.navigate('Home'))
//       .catch((err) => console.error(err));
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <h1>Add a New Rating for this Restaurant</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           placeholder='Rating'
//           maxLength='1'
//           onChange={(text) => setNewRating({ ...newRating, rating: text })}
//         />

//         <button
//           title='Send a New Rating'
//           onClick={sendNewRestaurantRating}
//           disabled={buttonDisabled}
//         />
//       </form>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rate, Button } from 'antd';

export default function RestaurantDetails() {
  const [restaurant, setRestaurant] = useState({});
  const [rating, setRating] = useState();
  const params = useParams();

  const handleRating = () => {
    fetch(`https://bocacode-intranet-api.web.app/restaurants/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: rating }),
    })
      .then((response) => response.json())
      .then((data) => setRating(data))
      .catch(alert);
  };

  useEffect(() => {
    fetch(`https://bocacode-intranet-api.web.app/restaurants/${params.id}`)
      .then((response) => response.json())
      .then((data) => setRestaurant(data))
      .catch(alert);
  }, [params.id, rating]);

  if (!restaurant.photoUrl) {
    return <p>Loading</p>;
  }

  return (
    // <section className="detail-wrapper">
    <section>
      <img src={restaurant.photoUrl} alt={`${restaurant.name}`} />
      <h1 style={{ fontSize: 42, fontWeight: 800, marginBottom: 0 }}>
        {' '}
        {restaurant.name}
      </h1>
      <Rate disabled defaultValue={restaurant.rating} />
      <span> ({restaurant.numRatings})</span>
      <hr />
      <h3> {restaurant.address}</h3>
      <hr />
      <h2 style={{ marginTop: '20px', fontSize: 28, fontWeight: 700 }}>
        {' '}
        Rate {restaurant.name}
      </h2>
      <Rate onChange={(value) => setRating(value)} />
      <Button onClick={handleRating} type='primary' size={'large'}>
        Submit Rating
      </Button>
    </section>
  );
}
