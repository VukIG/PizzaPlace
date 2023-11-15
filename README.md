# PizzaPlace Web App

Welcome to PizzaPlace – your one-stop destination for ordering delicious pizzas online! 🍕

## Overview

PizzaPlace is a MERN stack web application with a primary focus on React and is created using Vite for a fast and efficient development experience. It leverages TailwindCSS for styling and utilizes Redux with Redux Toolkit for state management. This web app empowers users to effortlessly order pizzas, customize their selections, and enjoy a seamless online pizza ordering experience.

## Features

- **Dynamic Pizza Ordering:**
  - Increase or decrease the quantity of each pizza in your order.
  - Calculate the total cost for multiple pizza orders.

- **Custom Pizza Creation:**
  - Build your own pizza with a user-friendly dropdown input using the React Select library.
  - Modify each pizza to your liking – from crust type to toppings.

- **Personalization:**
  - Name your custom pizza creations.
  - Upload images for your custom pizzas.

- **Pizza Gallery:**
  - Change images for both custom and predefined pizzas.

## Technologies Used

- **Frontend:**
  - React with Vite: ![React Logo](https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/512/react-256.png)
  - TailwindCSS: ![TailwindCSS Logo](https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-3/15/tailwind-256.png)
  - Redux Toolkit: ![Redux Toolkit Logo](https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-256.png)

## Backend APIs

All backend APIs are accessible starting with `http://localhost:2000/`.

| API Endpoint           | Description                                   |
| ---------------------- | --------------------------------------------- |
| `GET /getAllItems`     | Retrieve all pizza items.                     |
| `GET /getAllToppings`  | Get a list of available pizza toppings.       |
| `POST /addItem`        | Add a new pizza item.                         |
| `PATCH /editItem`      | Edit an existing pizza item.                  |


## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pizza-place.git
2. **Install dependencies:**
   ```bash
   npm install
3. **Go inside the client folder and run:**
   ```bash
   npm run dev
4. **Go inside the server folder and run:**
   ```bash
   nodemon.
Feel free to explore, contribute, and make your pizza ordering experience enjoyable with PizzaPlace!
