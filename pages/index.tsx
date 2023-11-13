import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.sass'
import Header from '@/components/Header/Header'
// import New, { DemoCarousel } from '@/components/New'
import Form from '@/components/Form/Form'
import ChacraForm from '@/components/Form/ChacraForm'
import Container from '../components/Container/Container'
import Hero from '@/components/Hero/Hero'
import Carusel from '@/components/Carusel/Carusel'
import UnsereKurse from '@/components/UnsereKurse/UnsereKurse'
import Footer from '@/components/Footer/Footer'
import SpezAngebote from '@/components/SpezAngebote/SpezAngebote'
import Willkommen from '@/components/Willkommen/Willkommen'
import Kmg from '@/components/Kmg/Kmg'
import CustomHead from '@/components/CustomHead/CustomHead'
import TrainingBaner from '@/components/TrainingBaner.tsx/TrainingBaner'
import Invite from '@/components/Invite/Invite'

// 2. У меня есть для вас не большое задание на 15 минут. Открой консоль
// https://codeshare.io/5zeMz4 и расшарь экран. Реши задачку. Стиральный аппарат принимает монеты
// 5, 10, 25, 50 центов, 1 доллар. Час стирки стоит 90 центов. Сдачу нужно выдавать вначале самыми крупными монетами,
//  дальше по уменьшению. Нужно реализовать алгоритм работы автомата. (протестить можно на часе, полтора, 2 часа - 90,
//   1 доллар 35 центов, один доллар 60 центов соответственно )

// const x = (par: number, time: string) => {
//   if (par === 90 && time === '1 hour') {
//     return '1 hour'
//   } else if (par === 1.35 && '1.5 hours') {
//     return '1.5 hour'
//   } else if (par === 1.6 && '2 hours') {
//     return '2 hour'
//   }
// }
// }

//  console.log(x(90, '1 hour'));
//  console.log(x(1.35, '1.5 hour'));
//  console.log(x(1.6, '2 hour'));

function includess(array: string | any[], value: string | number) {
  // Change code below this line
  let includes = false

  console.log();
  
  for (let i = 0; i < array.length; i += 1) {

    console.log('llll', array[i], value, array.length)
    // console.log('qqq', i)
    
    if (array[i] !== value) {
      includes = false
      console.log('f',{includes});

    } else {
      includes = true
      console.log('t',{includes});
      return includes

    }
  }
  return includes
  // Change code above this line
}

console.log('m',includess([1, 2, 3, 4, 5], 3))
console.log(includess([1, 2, 3, 4, 5], 17))
console.log(
  'mm', includess(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
)
console.log(includess(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'))
console.log(includess(['apple', 'plum', 'pear', 'orange'], 'plum'))

// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false

export default function Home() {
  return (
    <>
      <CustomHead />
      <Header />
      <main>
        <Hero data={{ title: '', subtitle: '', text: '' }} />
        <Willkommen />
        <TrainingBaner />
        {/* <Container>
          <Carusel/>
        </Container> */}
        <UnsereKurse />
        <SpezAngebote />
        <Kmg />
        {/* <New /> */}
        {/* <Invite/> */}
        <Invite type='mainPage' />
        <ChacraForm backgroundImage={true} />
        {/* <Form /> */}
        {/* <DemoCarousel/> */}
      </main>
      <Footer />
    </>
  )
}
