import Container from '../Container/Container'
import data from './yellowLine.json'

import s from './YellowLine.module.sass'

export default function YellowLine() {
  return <section className={s.section}>
    <Container>
      <p>{data.text}</p>
    </Container>
  </section>
}
