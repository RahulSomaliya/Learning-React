import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <h1>Hey React! I'm learning react.</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: 'red', fontSize: '32px', textTransform: 'uppercase' };
  const style = {};

  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numPizzas = pizzaData.length;
  // const numPizzas = 0;

  return (
    <div className='menu'>
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        // this is a react fragment - no parent component
        // <></>
        <React.Fragment key='anyUniqueKey'>
          <p>
            Authemtic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map(pizza => {
              return <Pizza pizzaObj={pizza} key={pizza.name} />;
            })}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;

  // if (soldOut) return null;

  return (
    // <div className={soldOut ? 'sold-out' : 'pizza'}>
    <div className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(`💎 isOpen: `, isOpen);

  // this will be executed twice just bcz of react strictmode
  // if (hour >= openHour && hour <= closeHour) alert(`We're currently open!`)
  // else alert(`Sorry we're closed!`)

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // This is what we'd have to do everytime without jsx
  // return React.createElement('footer', null, "We're currently open!");
}

function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>
        We're currently open until {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className='btn'>Order</button>
    </div>
  );
}

// This is how the index file is rendered from React version 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* for react's inbuild strict mode */}
    <App />
  </React.StrictMode>
);
