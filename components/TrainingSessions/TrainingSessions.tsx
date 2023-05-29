import Title from '../Title/Title'
import Container from '../Container/Container'

import s from './TrainingSessions.module.sass'

interface Props {
  data: {
    title: string
    subtitle?: string
    images: {
      src: string
      alt: string
      title: string
    }[]
  },
  type?: string
}

export default function TrainingSessions({ data, type }: Props) {
  return (
    <section className={`${s.section} ${type === 'grey' ? s.baclgroundGrey : ''}`}>
      <Container>
        <Title title={data.title} />
        {data.subtitle && <h3 className={s.subtitle}>{data.subtitle}</h3>}
        <div className={s.flex}>
          {data?.images.map(({ src, title, alt }, i) => (
            <div key={i} className={s.imgWrapper}>
              <img src={src} alt={alt} title={title} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
