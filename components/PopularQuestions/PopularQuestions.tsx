import Container from '../Container/Container'
import Title from '../Title/Title'

import s from './PopularQuestions.module.sass'

interface Props {
  data: {
    mainTitle: string
    list: {
      id: string
      text: string
      title: string
    }[]
  },
  type?: string
}

export default function PopularQuestions({ data, type }: Props) {
  return (
    <section className={s.section}>
      <Container>
        <Title title={data.mainTitle} />
        <ul>
          {data.list.map(({ id, text, title }) => (
            <li key={id}>
              <h4 className={`${type === 'frauen'? s.frauen : s.title}`}>{title}</h4>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
