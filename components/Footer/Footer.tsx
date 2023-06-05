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

          {/* Сестричка), [04.06.2023 20:16]
https://www.facebook.com/profile.php?id=100084612544968

Сестричка), [04.06.2023 20:17]
https://www.instagram.com/defensecombatives/ */}

          <div className={s.socialMedia}>
            <div
              className={s.title}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
            {socialMedia?.map(({ id, img, link }) => (
            <Link key={id} href={link}>
              <Image
                width={40}
                height={40}
                src={img.src}
                title={img.title}
                alt={img.alt}
              />
            </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
