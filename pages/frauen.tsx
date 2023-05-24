import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import GradientAndCards from '@/components/GradientAndCards/GradientAndCards'

import heroData from '../public/dataJsons/frauen/hero.json'
import gradientAndCardsData from '../public/dataJsons/frauen/gradientAndCards.json'

export default function behoerdenUndOeffentlicheTraeger () {
  return <>
  <Header/>
  <Hero 
    data={heroData} 
    type='frauen'
  />
  <GradientAndCards data={gradientAndCardsData} type='frauen'/>
  <Footer/>
  </>
}
