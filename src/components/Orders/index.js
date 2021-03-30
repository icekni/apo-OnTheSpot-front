import React from 'react';

import Order from './Order';

import './orders.scss';

const Orders = ({ ordersList }) => (
  <main className="orders">
    <h1 className="title">Commandes</h1>
    <div className="orders-container">
      { ordersList.map((order) => (
        <Order
          key={order.id}
          id={order.id}
          name={order.name}
          picture={order.picture}
          price={order.price}
          slug={order.slug}
          thumbnail={order.thumbnail}
        />
      ))}
      <Order />
      <Order />
    </div>
  </main>
);

export default Orders;
