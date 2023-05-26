import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import GradientAndCards from '@/components/GradientAndCards/GradientAndCards'
import Illustration from '@/components/Illustration/Illustration'
import CourseOverview from '@/components/CourseOverview/CourseOverview'
import WasBiten from '@/components/WasBiten/WasBiten'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'
import PopularQuestions from '@/components/PopularQuestions/PopularQuestions'

import heroData from '../public/dataJsons/frauen/hero.json'
import gradientAndCardsData from '../public/dataJsons/frauen/gradientAndCards.json'
import illustrationData from '../public/dataJsons/frauen/illustration.json'
import wasBitenData from '../public/dataJsons/frauen/wasBiten.json'
import trainingSessionsData from '../public/dataJsons/frauen/trainingSession.json'
import popularQuestionsData from '../public/dataJsons/frauen/popularQuestions.json'
import ChacraForm from '@/components/Form/ChacraForm'

export default function behoerdenUndOeffentlicheTraeger() {
  return (
    <>
      <Header />
      <Hero data={heroData} type='frauen' />
      <GradientAndCards data={gradientAndCardsData} type='frauen' />
      <Illustration img={illustrationData} />
      <CourseOverview />
      <WasBiten data={wasBitenData} type='frauen' />
      <TrainingSessions data={trainingSessionsData} />
      <PopularQuestions data={popularQuestionsData} type='frauen' />
      <ChacraForm/>
      <Footer />
    </>
  )
}
