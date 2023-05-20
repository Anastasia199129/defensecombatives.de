import Container from '../Container/Container'

import s from './Willkommen.module.sass'

import data from './willkommen.json'

export default function Willkommen() {
  return (
    <Container>
      <section className={s.section}>
        <div className={s.imgWrapper}>
          <img src={data.img.src} alt={data.img.src} title={data.img.title} />
        </div>

        <div>
          <div
            className={s.title}
            dangerouslySetInnerHTML={{
              __html: data.title,
            }}
          />
          <p className={s.subtitle}>{data.subtitle}</p>
          <p>{data.description}</p>
        </div>
      </section>
    </Container>
  )
}
