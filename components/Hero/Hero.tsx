import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import s from './Hero.module.sass'
import { useRef } from 'react'
import useWindowWidth from '../../helpers/windiwWidthHandler'

import Slider from 'react-slick'
import Container from '../Container/Container'

import items from './mainJson.json'

interface Props {
  data: {
    title?: string
    subtitle?: string
    text?: string
    backgroundImmage?: string
  }
  type?: string | undefined
}

export default function Hero({ data, type }: Props) {
  const sliderRef = useRef<Slider>(null)

  const windowWidth = useWindowWidth()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  }

  return (
    <>
      {!data.title ? (
        <div className={s.wrapper}>
          <Slider ref={sliderRef} {...settings}>
            {items.map((item) => (
              <Link href={item.path} key={item.id}>
                <img src={windowWidth > 575 ? item.imageUrl.url : item.imageUrl.mobileUrl} alt={`Slide ${item.id}`} />
              </Link>
            ))}
          </Slider>
        </div>
      ) : (
        <div
          className={`${s.baner} ${
            type === 'kinder' ? s.kinder : type === 'frauen' ? s.frauen : type ===  'behorden' ? s.behorden : ''
          }`}
          style={{ backgroundImage: `url(${data.backgroundImmage})` }}
        >
          <Container>
            <div className={s.heroContent}>
              <h1>{data?.title}</h1>
              <h2>{data.subtitle}</h2>
              {data.text && (
                <div
                  className={s.text}
                  dangerouslySetInnerHTML={{
                    __html: data.text,
                  }}
                />
              )}
            </div>
          </Container>
        </div>
      )}
    </>
  )
}

// {/* <Carusel /> */}
