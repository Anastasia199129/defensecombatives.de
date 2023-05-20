import Link from 'next/link'
import Container from '../Container/Container'
import data from './data.json'

import s from './SpezAngebote.module.sass'
import Title from '../Title/Title'

export default function SpezAngebote() {
  return (
    <Container>
      <section>
        <Title title='unsere speziellen angebote'/>
        <ul className={s.ul}>
          {data &&
            data.map(({ id, title, description, img, button }) => (
              <li key={id}>
                <img src={img.src} alt='' />
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className={s.link} href={button.link}>{button.text}</Link>
              </li>
            ))}
        </ul>
      </section>
    </Container>
  )
}
