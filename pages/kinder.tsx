import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'

import heroData from '../public/dataJsons/kinder/hero.json'
import GoodForKinder from '@/components/GoodForKinder/GoodForKinder'
import WasBiten from '@/components/WasBiten/WasBiten'
import ForKidsSchool from '@/components/ForKidsSchool/ForKidsSchool'
import QuoresSection from '@/components/QuoresSection/QuoresSection'
import BanerKidsAngebot from '@/components/BanerKidsAngebot/BanerKidsAngebot'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'
import PopularQuestions from '@/components/PopularQuestions/PopularQuestions'
import ChacraForm from '@/components/Form/ChacraForm'
export default function Startseite() {
  return <>
  <Header/>
  <Hero data={heroData} type='kinder'/>
  <GoodForKinder/>
  <WasBiten/>
  <BanerKidsAngebot/>
  <ForKidsSchool/>
  <QuoresSection/>
  <TrainingSessions/>
  <PopularQuestions/>
  <ChacraForm/>
  <Footer/>
  </>
}
