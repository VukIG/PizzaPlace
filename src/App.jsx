import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex bg-[#1E1E1E] ">
        <div className="">
          <img src="logo.svg" alt="" />
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">View</a></li>
          </ul>
        </div>
        <div className="">
          <button><i>ovde ikonica</i> Cart</button>
        </div>
      </div>
      <div className="flex">
          <div className="flex horizontal">
            <h1>Freshly baked Pizzas, made with love</h1>
            <p>Discover a gastronomic delight of Exquisite Pizzas, crafted with the finest ingredients and careful attention to detail</p>
            <button>Start ordering</button>
          </div>
          <div className="">
            <img src="" alt="" />
          </div>
      </div>
    </>
  )
}

export default App
