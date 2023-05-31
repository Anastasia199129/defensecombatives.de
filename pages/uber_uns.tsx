import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import MedalsAndText from '@/components/MedalsAndText/MedalsAndText'
import WirSind from '@/components/WirSind/WirSind'
import QuotationMark from '@/components/QuotationMark/QuotationMark'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'
import RegistrationAndTraining from '@/components/RegistrationAndTraining/RegistrationAndTraining'
import ChacraForm from '@/components/Form/ChacraForm'

import heroData from '../public/dataJsons/uber_uns/hero.json'
import trainingSessionsData from '../public/dataJsons/uber_uns/trainingSessions.json'

export default function über_uns() {
  return <>
  <Header/>
  <Hero data={heroData}/>
  <WirSind/>
  <MedalsAndText/>
  <QuotationMark/>
  <TrainingSessions type='uber_uns' data={trainingSessionsData}/>
  <RegistrationAndTraining type='uber_uns'/>
  <ChacraForm/>
  <Footer/>
  </>
}
