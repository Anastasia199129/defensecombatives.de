import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import WasBiten from '@/components/WasBiten/WasBiten'
import KravMagaOffers from '@/components/KravMagaOffers/KravMagaOffers'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'

import heroData from '../public/dataJsons/erwachsene/hero.json'
import wasBitenData from '../public/dataJsons/erwachsene/wasBiten.json'
import trainingSessionsData from '../public/dataJsons/erwachsene/trainingSession.json'
import ChacraForm from '@/components/Form/ChacraForm'

export default function Impressum () {
  return <>
  <Header/>
  <Hero data={heroData}/>
  <KravMagaOffers/>
  <WasBiten data={wasBitenData}/>
  <TrainingSessions data={trainingSessionsData} type='grey'/>
  <ChacraForm/>
  <Footer/>
  </>
}
