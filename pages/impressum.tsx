import CustomHead from '@/components/CustomHead/CustomHead'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Impressum from '../components/Impressum/Impressum'

import heroData from '../public/dataJsons//impressum/hero.json'

export default function impressum() {
  return (
    <>
      <CustomHead />
      <Header />
      <main>
      <Hero data={heroData} />
      <Impressum/>
      </main>
      <Footer />
    </>
  )
}
