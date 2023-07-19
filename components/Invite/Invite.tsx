import Link from 'next/link'
import Container from '../Container/Container'
import data from './invite.json'

import s from './Invite.module.sass'

interface Props {
  type?: string
}

export default function Invite({type}: Props) {
  return (
    <div className={type === 'mainPage' ? s.mainPage : s.uber_unts}>
      <Container>
        <div className={s.wrapper}>
          <h3>{data.title}</h3>
          <Link className={s.link} href={data.buttom.link}>
            {data.buttom.text}
          </Link>
        </div>
      </Container>
    </div>
  )
}
