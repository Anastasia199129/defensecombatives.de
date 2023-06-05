import Link from 'next/link'
import Container from '../Container/Container'
import data from './invite.json'

import s from './Invite.module.sass'

export default function Invite() {
  return (
    <section>
      <Container>
        <div className={s.wrapper}>
          <h3>{data.title}</h3>
          <Link className={s.link} href={data.buttom.link}>
            {data.buttom.text}
          </Link>
        </div>
      </Container>
    </section>
  )
}
