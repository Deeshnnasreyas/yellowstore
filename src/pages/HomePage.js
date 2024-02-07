import React from 'react'
import Contents from '../components/contents/Contents'
import Footer from '../components/footers/Footer'
import Headers from '../components/headers/Headers'
import Products from '../components/products/Products'

const Home = () => {
  return (
    <div>
      <Headers/>
      <Contents/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home