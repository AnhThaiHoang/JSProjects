import './App.css'
import Card from './Card'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {products} from './Products'
import { useState } from 'react'

function App() {
  const [productFilter, setProductFilter] = useState(products)

  function filter(str){
    const filt = products.filter((element, _) => {
      return element.name.toLowerCase().includes(str.toLowerCase())
    })
    setProductFilter(filt)
  }


  return (
    <div>
      <h1 className='text-center'>Menu</h1>

      <nav className='d-flex justify-content-center'>
        <button className='btn border' onClick={() => filter("")}>Vše</button>
        <button className='btn border' onClick={() => filter("menu")}>Menu</button>
      </nav>

      <ul className='row px-5'>
        {
          productFilter.map((element, index) =>
            <li key={index} className='list-unstyled col-5 mx-1'>
              <Card foodName={element.name} img={element.img} description={element.description} price={element.price}/>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default App