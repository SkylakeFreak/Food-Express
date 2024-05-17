import React from 'react'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Navbar from './Navbar'
import RecipeComponent from './Recipe'

function Main() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth" >
      <section id="navbar" className="snap-start"><Navbar/></section>
      <section id="about" className="snap-center"><Aboutus/></section>
      <section id="recipe" className="snap-center"><RecipeComponent/></section>
      <section id="contact" className="snap-center"><Contact/></section>
      

      
    </div>
  )
}

export default Main