import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import RecipeSlider from '../../components/RecipeSlider/RecipeSlider'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
      <div>
          <div>
              <Header />
          </div>
          <div>
              <Hero />
          </div>
          <div className='mt-3'>
              <RecipeSlider />
          </div><br />
          <div className='mt-3'>
              <Categories />
          </div>
          <div className='mt-3'>
              <Footer />
          </div>
     </div>
  )
}
