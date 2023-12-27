import React from 'react'
import '../home/Home.css'
import Button from 'react-bootstrap/Button';
import Products from '../../features/product/Products';


export default function Home() {

  return (
    <>
      <div className='bg-area'>
        <div className='bg-box'>
          <div className='bg-detail'>
          <h5 className='trend'>HOT TREND__</h5><i class="fa-solid fa-fire-flame-curved"></i>  <br />
            <h1 className='main-title'>FRESH FASHION FINDS <br />
              NEW COLLECTION</h1>
          </div>
        </div>
      </div>
      <div className='product-title '>
        <div className='container'>
          <h1>Explore Our Products</h1>
        </div>
      </div>
      <Products />
    </>
  )
}
