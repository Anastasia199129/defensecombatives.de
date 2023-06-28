import Container from '../Container/Container'

import data from './trainingsplan.json'

import useWindowWidth from '@/helpers/windiwWidthHandler'

import s from './Trainingsplan.module.sass'

export default function Trainingsplan() {
  const windowWidth = useWindowWidth()

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.section}>
          <h1>{data.title}</h1>
        </div>

        <div className={s.imgSection}>
          <div className={s.imgWrapper}>
            <img
              src={`${
                windowWidth < 576
                  ? data.img.src.mobile
                  : windowWidth < 992 && windowWidth > 575
                  ? data.img.src.tablet
                  : data.img.src.desktop
              }`}
              title={data.img.title}
              alt={data.img.alt}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
