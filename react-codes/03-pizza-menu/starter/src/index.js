import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      /> */}

      <ul className="pizzas">
        {pizzaData.length > 0 ? (
          pizzaData.map((pizza) => {
            return (
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                photoName={pizza.photoName}
                key={pizza.name}
                soldOut={pizza.soldOut}
              />
            );
          })
        ) : (
          <p>We're still working on our menu. Please come back back later :)</p>
        )}
      </ul>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) {
  //   alert(`We're currently open`);
  // } else {
  //   alert(`Sorry, we're closed`);
  // }

  // if (!isOpen) {
  //   return <p>CLOSED</p>;
  // }

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ name, ingredients, photoName, price, soldOut }) {
  // if (soldOut) return null;
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={`${photoName}`} alt=""></img>
      <div>
        <h2>{name}</h2>
        <p>{ingredients}</p>
        <span>{soldOut ? <span>SOLD OUT</span> : price}</span>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
