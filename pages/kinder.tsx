import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'

import heroData from '../public/dataJsons/kinder/hero.json'
import GoodForKinder from '@/components/GoodForKinder/GoodForKinder'
import WasBiten from '@/components/WasBiten/WasBiten'
export default function Startseite() {
  return <>
  <Header/>
  <Hero data={heroData} type='kinder'/>
  <GoodForKinder/>
  <WasBiten/>
  <Footer/>
  </>
}
