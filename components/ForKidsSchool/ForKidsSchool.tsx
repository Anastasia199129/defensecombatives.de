import Container from '../Container/Container'
import data from './forKidsSchool.json'

import s from './ForKidsSchool.module.sass'
import Lapka from './img/Lapka'

export default function ForKidsSchool() {
  return (
    <div className={s.section}>
      <Container>
        <div>
          {/* <h3>{data.title}</h3> */}
          <h3 className={s.text}>{data.text}</h3>
          <ul className={s.list}>
            {data.list.map(({ id, content }) => (
              <li key={id}>
                <div className={s.imgWrapper}>
                  <Lapka />
                </div>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}
