import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import s from './Hero.module.sass'
import { useRef } from 'react'
import useWindowWidth from '../../helpers/windiwWidthHandler'

import Slider from 'react-slick'
import Container from '../Container/Container'

import items from './mainJson.json'
import Image from 'next/image'

interface Props {
  data: {
    title?: string
    subtitle?: string
    text?: string
    textWithoutBr?: string
    backgroundImmage?: {
      img: string
      imgTablet: string
      imgMobile: string
    }
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
                <Image
                  src={
                    windowWidth > 575
                      ? item.imageUrl.url
                      : item.imageUrl.mobileUrl
                  }
                  alt={`Slide ${item.id}`}
                  layout='responsive'
                  width={1000}
                  height={400}
                />
              </Link>
            ))}
          </Slider>
        </div>
      ) : (
        <div
          className={`${s.baner} ${
            type === 'kinder'
              ? s.kinder
              : type === 'frauen'
              ? s.frauen
              : type === 'behorden'
              ? s.behorden
              : type === 'uber_uns'
              ? s.uber_uns : ''
          }`}
          style={{
            backgroundImage: `url(${
              windowWidth < 576
                ? data.backgroundImmage?.imgMobile
                : windowWidth < 992 && windowWidth > 575
                ? data.backgroundImmage?.imgTablet
                : data.backgroundImmage?.img
            })`,
          }}
        >
          <Container>
            <div className={s.heroContent}>
              <h1 className={`${type === 'frauen' && s.frauenTitle}`}>{data?.title}</h1>
              <h2>{data.subtitle}</h2>

              {type === 'kinder' && data.text && windowWidth > 767 && (
                <div
                  className={s.text}
                  dangerouslySetInnerHTML={{
                    __html: data.text,
                  }}
                />
              )}
              {type === 'kinder' && windowWidth < 768 && windowWidth > 430 && (
                <div className={s.text}>
                  <p>{data.textWithoutBr}</p>
                </div>
              )}
              {data.text && type !== 'kinder' && (
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
