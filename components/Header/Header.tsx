import Link from 'next/link'

import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import useWindowWidth from '../../helpers/windiwWidthHandler'

import Container from '../Container/Container'

import data from './header.json'

import s from './Header.module.sass'

interface Data {
  id: string
  name: string
  link: string
}

export default function Header() {
  const router = useRouter()
  const [active, setActive] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const windowWidth = useWindowWidth()

  useEffect(() => {
    const onOutsideMenuClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowMenu(false)
        setActive(false)
      }
    }
    document.addEventListener('click', onOutsideMenuClick)

    return () => {
      document.removeEventListener('click', onOutsideMenuClick)
    }
  }, [])

  const getActiveLink = (link: string) => {
    if (link === router.pathname) {
      return { color: '#DAA520' }
    } else return {}
  }

  const onToggleMenuClick = () => {
    setActive(!active)
    setShowMenu(!showMenu)
  }

  return (
    <Container>
      {windowWidth >= 768 ? (
        <div className={s.wrapper}>
          <Link href='/' className={s.logo} />
          {data &&
            data.map(({ id, name, link }: Data) => (
              <p style={getActiveLink(link)} key={id}>
                <Link href={`${link}`}>{name}</Link>
              </p>
            ))}
        </div>
      ) : (
        <div className={`${s.wrapper} ${s.burgerWrapper}`}>
          <Link href='/' className={s.logo} />
          <button
            ref={buttonRef}
            onClick={onToggleMenuClick}
            className={`${s.burger} ${active ? s.active : ''}`}
          ></button>
          {showMenu && (
            <div ref={menuRef} className={s.menu}>
              {data &&
                data.map(({ id, name, link }: Data) => (
                  <p style={getActiveLink(link)} key={id}>
                    <Link href={`${link}`}>{name}</Link>
                  </p>
                ))}
            </div>
          )}
        </div>
      )}
    </Container>
  )
}
