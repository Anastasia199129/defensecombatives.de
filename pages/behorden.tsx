import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Andre from '@/components/Andre/Andre'
import BehordenIcons from '@/components/BehordenIcons/BehordenIcons'
import TextAndTitle from '@/components/TextAndTitle/TextAndTitle'
import OurOffers from '@/components/OurOffers/OurOffers'
import YellowLine from '@/components/YellowLine/YellowLine'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'
import ChacraForm from '@/components/Form/ChacraForm'
import CustomHead from '@/components/CustomHead/CustomHead'

import heroData from '../public/dataJsons/behorden/hero.json'
import trainingSessionInstructorData from '../public/dataJsons/behorden/trainingSessionInstructor.json'
import trainingSessionTrainingData from '../public/dataJsons/behorden/trainingSessionTraining.json'

export default function UeberUns() {

  return (
    <>
      <CustomHead />
      <Header />
      <main>
        <Hero data={heroData} type='behorden' />
        <Andre />
        <BehordenIcons />
        <TextAndTitle />
        <OurOffers />
        <YellowLine />
        <TrainingSessions
          type='behorden'
          data={trainingSessionInstructorData}
        />
        <TrainingSessions data={trainingSessionTrainingData} />
        <ChacraForm />
      </main>
      <Footer />
    </>
  )
}
