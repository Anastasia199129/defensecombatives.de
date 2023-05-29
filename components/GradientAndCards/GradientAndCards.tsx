import Container from '../Container/Container'
import Title from '../Title/Title'

import s from './GradientAndCards.module.sass'

// import data from './gradientAndCards.json'
import Lapka from './img/Lapka'

interface Props {
  data: {
    title: string
    content: string[]
  }
  type?: string
}

export default function GradientAndCards ({ data, type }: Props) {
  return (
    <div className={`${s.section} ${type === 'frauen' ? s.frauen : s.kinder}`}>
      <Container>
        <Title title={data.title} />
        <ul>
          {data?.content?.map((text, i) => (
            <li key={i}>
              {type !== 'frauen' ? (
                <div className={s.wrapperImg}>
                  <Lapka />
                  <span className={s.number}>{i + 1}</span>
                </div>
              ) : (
                <span className={s.number}>{i + 1}</span>
              )}
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
