import Container from '../Container/Container'
import Title from '../Title/Title'

import data from './popularQuestions.json'
import s from './PopularQuestions.module.sass'

export default function PopularQuestions() {
  return <section className={s.section}>
    <Container>
      <Title title={data.mainTitle}/>
      <ul>
        {data.list.map(({id, text, title}) => (
          <li key={id}>
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
}
