import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'

import GradientAndCards from '@/components/GradientAndCards/GradientAndCards'
import WasBiten from '@/components/WasBiten/WasBiten'
import ForKidsSchool from '@/components/ForKidsSchool/ForKidsSchool'
import QuoresSection from '@/components/QuoresSection/QuoresSection'
import BanerKidsAngebot from '@/components/BanerKidsAngebot/BanerKidsAngebot'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'
import PopularQuestions from '@/components/PopularQuestions/PopularQuestions'
import ChacraForm from '@/components/Form/ChacraForm'
import CustomHead from '@/components/CustomHead/CustomHead'

import heroData from '../public/dataJsons/kinder/hero.json'
import gradientAndCardsData from '../public/dataJsons/kinder/gradientAndCards.json'
import wasBitemData from '../public/dataJsons/kinder/wasBiten.json'
import trainingSessionsData from '../public/dataJsons/kinder/trainingSessions.json'
import popularQuestionsData from '../public/dataJsons/kinder/popularQuestions.json'
import banerKidsAngebotData from '../public/dataJsons/kinder/banerKidsAngebot.json'

export default function Startseite() {
  return (
    <>
      <CustomHead />
      <Header />
      <main>
        <Hero data={heroData} type='kinder' />
        <GradientAndCards data={gradientAndCardsData} />
        <WasBiten data={wasBitemData} />
        <a id='unser'/>
        <BanerKidsAngebot data={banerKidsAngebotData} />
        <ForKidsSchool />
        <QuoresSection />
        <TrainingSessions type='uber_uns' data={trainingSessionsData} />
        <PopularQuestions data={popularQuestionsData} />
        <ChacraForm />
      </main>
      <Footer />
    </>
  )
}
