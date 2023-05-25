import Container from '../Container/Container'

import data from './courseOverview.json'

import s from './CourseOverview.module.sass'

export default function CourseOverview() {
  return (
    <section className={s.section}>
      <Container>
        <h2>{data.title}</h2>
        <ul>
          {data.cards.map((card, i) => (
            <li key={i}>{card}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
