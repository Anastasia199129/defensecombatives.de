import Container from '../Container/Container'
import data from './quoresSection.json'

import s from './QuoresSection.module.sass'

export default function QuoresSection() {
  return (
    <div className={s.section}>
      <Container>
        <h3>{data.content}</h3>
      </Container>
    </div>
  )
}
