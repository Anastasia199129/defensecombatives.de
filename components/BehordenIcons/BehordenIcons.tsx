import Container from '../Container/Container'
import data from './behordenIcons.json'

import s from './BehordenIcons.module.sass'

export default function BehordenIcons() {
  return (
    <section className={s.section}>
      <Container>
        <p>{data.text}</p>

        <ul>
          {data.icons.map(({ id, img }) => (
            <li key={id}>
              <img src={img.src} alt={img.alt} title={img.title} />
            </li>
          ))}
        </ul>

      </Container>
    </section>
  )
}
