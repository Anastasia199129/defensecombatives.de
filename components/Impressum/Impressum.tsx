import Container from '../Container/Container'

import data from './impresum.json'

import s from './Impressum.module.sass'

export default function Impressum() {

  return (
    <section className={s.section}>
      <Container>
        <div
          className={s.impresum}
          dangerouslySetInnerHTML={{
            __html: data.text,
          }}
        />
      </Container>
    </section>
  )
}
