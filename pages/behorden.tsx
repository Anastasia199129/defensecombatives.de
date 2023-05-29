import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Andre from '@/components/Andre/Andre'
import BehordenIcons from '@/components/BehordenIcons/BehordenIcons'
import TextAndTitle from '@/components/TextAndTitle/TextAndTitle'
import OurOffers from '@/components/OurOffers/OurOffers'
import ForNurseriesAndSchools from '@/components/ForNurseriesAndSchools/ForNurseriesAndSchools'
import YellowLine from '@/components/YellowLine/YellowLine'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'

import heroData from '../public/dataJsons/behorden/hero.json'
import trainingSessionInstructorData from '../public/dataJsons/behorden/trainingSessionInstructor.json'
import trainingSessionTrainingData from '../public/dataJsons/behorden/trainingSessionTraining.json'
import Form from '@/components/Form/Form'
import ChacraForm from '@/components/Form/ChacraForm'

export default function UeberUns() {
  return <>
  <Header/>
  <Hero data={heroData} type='behorden'/>
  <Andre/>
  <BehordenIcons/>
  <TextAndTitle/>
  <OurOffers/>
  {/* <ForNurseriesAndSchools/> */}
  <YellowLine/>
  <TrainingSessions data={trainingSessionInstructorData}/>
  <TrainingSessions data={trainingSessionTrainingData}/>
  <ChacraForm/>
  <Footer/>
  </>
}
