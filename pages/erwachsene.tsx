import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import WasBiten from '@/components/WasBiten/WasBiten'
import KravMagaOffers from '@/components/KravMagaOffers/KravMagaOffers'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'
import ChacraForm from '@/components/Form/ChacraForm'
import CustomHead from '@/components/CustomHead/CustomHead'

import heroData from '../public/dataJsons/erwachsene/hero.json'
import wasBitenData from '../public/dataJsons/erwachsene/wasBiten.json'
import trainingSessionsGreyData from '../public/dataJsons/erwachsene/trainingSessionGrey.json'
import trainingSessionsData from '../public/dataJsons/erwachsene/trainingSessions.json'

export default function Impressum() {
  return (
    <>
      <CustomHead />
      <Header />
      <main>
        <Hero data={heroData} />
        <KravMagaOffers />
        <WasBiten data={wasBitenData} />
        <TrainingSessions
          data={trainingSessionsGreyData}
          type='erwachseneGrey'
        />
        <TrainingSessions data={trainingSessionsData} type='uber_uns' />
        <ChacraForm />
        <a id="my-anchor"></a>
      </main>
      <Footer />
    </>
  )
}
