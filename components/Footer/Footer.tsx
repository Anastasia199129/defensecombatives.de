import Container from '../Container/Container'
import s from './Footer.module.sass'

export default function Footer() {
  return (
    <section className={s.section}>
      <Container>
      <h3>Kontacte</h3>
      <div>
        <address className={s.address}>
          <ul className={s.list}>
            <li>
              <a href='tel:017622651872'>
                0176-22651872
              </a>
            </li>
            <li>
              <a href='tel:01782339741'>
               0178-2339741
              </a>
            </li>
            <li>
              <a href='mailto:kontakt@defensecombatives.de'>
                kontakt@defensecombatives.de
              </a>
            </li>
          </ul>
        </address>
      </div>
      </Container>
    </section>
  )
}
