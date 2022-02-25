import React, { useState, useEffect } from 'react';
import '../App.css';
import { Card, Rate, Col, Row } from 'antd';

const { Meta } = Card;

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);

  return (
    <section className='card-wrapper'>
      <Row gutter={16}>
        {restaurants.map((restaurant) => {
          return (
            <Col span={8}>
              <Card
                key={restaurant.id}
                hoverable
                style={{ width: 260, margin: 20 }}
                cover={
                  <img
                    alt={`Shots of ${restaurant.name}`}
                    src={restaurant.photoUrl}
                  />
                }
              >
                <Meta title={restaurant.name} />
                <Rate disabled defaultValue={restaurant.rating} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
