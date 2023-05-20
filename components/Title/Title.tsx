import s from './Title.module.sass'

interface Prop {
  title: string
}

export default function Title({ title }: Prop) {
  return <h2 className={s.title}>{title}</h2>
}
