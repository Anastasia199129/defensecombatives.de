import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'

import heroData from '../public/dataJsons/uber_uns/hero.json'
import WirSind from '@/components/WirSind/WirSind'

export default function über_uns() {
  return <>
  <Header/>
  <Hero data={heroData}/>
  <WirSind/>
  <Footer/>
  </>
}
