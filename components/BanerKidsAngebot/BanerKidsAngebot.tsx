import Image from 'next/image'

import Container from '../Container/Container'

import useWindowWidth from '../../helpers/windiwWidthHandler'

import s from './BanerKidsAngebot.module.sass'

interface Props {
  data : {
    img: string
    imgMobile: string
    imgTablet: string
  }
}

export default function BanerKidsAngebot({data}: Props) {

  const windowWidth = useWindowWidth()

  return (
    <div className={s.section}>
      <Image
        layout='responsive'
        width={1000}
        height={500}
        src={`${windowWidth < 576 ? data.imgMobile : windowWidth > 575 && windowWidth < 992 ? data.imgTablet : data.img}`}
        alt='kids-angebot'
      />
      {/* <Container> */}
       <div className={s.title}>
       <h3>
          <span>Unser sonderangebot</span> für Kindergärten und schulen
        </h3>
       </div>
      {/* </Container> */}
    </div>
  )
}
