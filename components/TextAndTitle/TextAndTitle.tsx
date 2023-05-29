import Container from '../Container/Container'

import data from './textAndTitle.json'

import s from './TextAndTitle.module.sass'

export default function TextAndTitle() {
  return (
    <section className={s.section}>
      <Container>
        <h2>{data.title}</h2>
        <div
          className={s.text}
          dangerouslySetInnerHTML={{
            __html: data.text,
          }}
        />
      </Container>
    </section>
  )
}
