import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

import Container from '../Container/Container'

import data from './footer.json'
import useWindowWidth from '../../helpers/windiwWidthHandler'

import s from './Footer.module.sass'

export default function Footer() {
  const { contacts, socialMedia, text } = data

  const router = useRouter()
  const windowWidth = useWindowWidth()

  return (
    <div className={s.section}>
      <Container>
        <p className={s.contactTitle}>Kontakt</p>

        <div className={s.wrapper}>
          <address className={s.address}>
            <ul className={s.list}>
              {contacts?.map(({ id, link, img }) => (
                <li key={id}>
                  <Image
                    width={windowWidth > 575 ? 40 : 30}
                    height={windowWidth > 575 ? 40 : 30}
                    src={img.src}
                    title={img.title}
                    alt={img.alt}
                  />
                  <Link href={link.href}>{link.content}</Link>
                </li>
              ))}
            </ul>
          </address>

          <div className={s.rightSideContainer}>
            <div className={s.socialMedia}>
              <div
                className={s.title}
                dangerouslySetInnerHTML={{
                  __html: text,
                }}
              />
              <div className={s.socialIcons}>
              {socialMedia?.map(({ id, img, link }) => (
                <Link key={id} href={link}>
                  <Image
                    width={windowWidth > 575 ? 40 : 30}
                    height={windowWidth > 575 ? 40 : 30}
                    src={img.src}
                    title={img.title}
                    alt={img.alt}
                  />
                </Link>
              ))}
              </div>
            </div>

            <div
              className={`${s.impressum} ${router.pathname === '/impressum' ? s.active : ''}`}
            >
              <Link href='/impressum'>Impressum</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
