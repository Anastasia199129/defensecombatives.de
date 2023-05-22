import Link from 'next/link'
import Container from '../Container/Container'
import s from './Footer.module.sass'

import data from './footer.json'
import Image from 'next/image'

export default function Footer() {
  const { contacts, socialMedia, text } = data

  return (
    <div className={s.section}>
      <Container>
        <p className={s.contactTitle}>Kontacte</p>

        <div className={s.wrapper}>

          <address className={s.address}>
            <ul className={s.list}>
              {contacts?.map(({ id, link, img }) => (
                <li key={id}>
                  <Image
                    width={40}
                    height={40}
                    src={img.src}
                    title={img.title}
                    alt={img.alt}
                  />
                  <Link href={link.href}>{link.content}</Link>
                </li>
              ))}
            </ul>
          </address>

          <div className={s.socialMedia}>
            <div
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
            {socialMedia?.map(({ id, img }) => (
              <Image
                key={id}
                width={40}
                height={40}
                src={img.src}
                title={img.title}
                alt={img.alt}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
