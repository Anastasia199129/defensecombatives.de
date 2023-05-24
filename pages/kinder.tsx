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

import heroData from '../public/dataJsons/kinder/hero.json'
import gradientAndCardsJson from '../public/dataJsons/kinder/gradientAndCards.json'

export default function Startseite() {
  return (
    <>
      <Header />
      <Hero data={heroData} type='kinder' />
      <GradientAndCards data={gradientAndCardsJson} />
      <WasBiten />
      <BanerKidsAngebot />
      <ForKidsSchool />
      <QuoresSection />
      <TrainingSessions />
      <PopularQuestions />
      <ChacraForm />
      <Footer />
    </>
  )
}
