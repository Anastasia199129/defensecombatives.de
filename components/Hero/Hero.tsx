// import DemoCarousel  from '../New'
import Carusel from '../Carusel/Carusel'
import Container from '../Container/Container'
import s from './Hero.module.sass'

export default function Hero() {
  return <div className={s.wrapper}>
      <Carusel />
    </div>
}
