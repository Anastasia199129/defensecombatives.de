import { ReactNode } from 'react'
import s from './Container.module.sass'

interface Props {
  noPadding?: boolean
  children: ReactNode
}

export default function Container({noPadding, children}:Props) {
  return <div className={!noPadding ? s.container : s.noPadding}>{children}</div>
}
