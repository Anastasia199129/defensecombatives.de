import Link from 'next/link'
import Container from '../Container/Container'
import s from './Kmg.module.sass'
import { link, logo, descriptopn, title } from './kmg.json'
import Arrow from '../SpezAngebote/Arrow'

export default function Kmg() {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.flex}>
          
          <div className={s.logoWrapper}>
            <Link className={s.link} href={link.link}>
              {link.linkName}
              <Arrow />
            </Link>
            <img src={logo.src} alt={logo.alt} title={logo.title} />
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
