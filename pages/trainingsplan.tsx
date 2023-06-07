import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Trainingsplan from '@/components/Trainingsplan/Trainingsplan'
import RegistrationAndTraining from '@/components/RegistrationAndTraining/RegistrationAndTraining'
import ChacraForm from '@/components/Form/ChacraForm'
import CustomHead from '@/components/CustomHead/CustomHead'

export default function UnserKursangebot() {
  return (
    <>
      <CustomHead />
      <Header />
      <main>
        <Trainingsplan />
        <RegistrationAndTraining />
        <ChacraForm />
      </main>
      <Footer />
    </>
  )
}
