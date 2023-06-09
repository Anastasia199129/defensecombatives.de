import Link from 'next/link'
import Container from '../Container/Container'
import s from './Kmg.module.sass'
import { logo, descriptopn, title } from './kmg.json'

export default function Kmg() {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.flex}>
          <div className={s.logoWrapper}>
            <Link href='https://krav-maga-global.de' >
            <img src={logo.src} alt={logo.alt} title={logo.title} />
            </Link>
          </div>

          <div className={s.rightSideWrapper}>
            <h4>{title}</h4>
            <p>{descriptopn}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
