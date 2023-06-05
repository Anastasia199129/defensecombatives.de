import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import MedalsAndText from '@/components/MedalsAndText/MedalsAndText'
import WirSind from '@/components/WirSind/WirSind'
import TrainingSessions from '@/components/TrainingSessions/TrainingSessions'
import RegistrationAndTraining from '@/components/RegistrationAndTraining/RegistrationAndTraining'
import ChacraForm from '@/components/Form/ChacraForm'

import heroData from '../public/dataJsons/uber_uns/hero.json'
import trainingSessionsData from '../public/dataJsons/uber_uns/trainingSessions.json'
import trainingSessionsSecondData from '../public/dataJsons/erwachsene/trainingSessionGrey.json'
import Invite from '@/components/Invite/Invite'


export default function über_uns() {

  // const data = ['asdf', 'fdas', 'asds', 'd fm', 'dfaa', 'aaaa', 'aabb', 'aaabb']

  // const f = (d: string[]) => {
  //   return d.filter((str: any) => {
  //     const count = str
  //       .split('')
  //       .reduce((acc:any, el: string | number) => {
  //         console.log(acc, {el});
          
  //         acc[el] = (acc[el] || 0) + 1
  //         return acc
  //       }, {})
  //     console.log(count)

  //     return Object.values(count).includes(2)
  //   })
  // }

  // console.log(f(data))


  
// <script>

// // TODO: Create function that will accept via standard input a sequence of numbers
// // delimited by space and will return the longest growing subsequence
// // that can be constructed from input by removing numbers but not changing their positions.

// const input = [9, 3, 7, 4, 6, 9, 13, 5, 0];

// function getLongestGrowingSequence(input) {
//   let finalResult = [];
  
//   while(input.length > finalResult.length) {
    
//   const arr = [];
//   let elementToRemove = null;
//   for(let i = 0; i < input.length; i += 1) {
  
//     console.log({input: input[i]}, {arr: arr[arr.length]})
    
//     if(!arr.length || input[i] > arr[arr.length - 1]){
//       arr.push(input[i])
//     } else if(!elementToRemove) {
//       elementToRemove =  arr[arr.length - 1]
//     }
//   }
  
//   if(finalResult.length < arr.length) {
//     finalResult = arr;
//   }
//     input.splice(input.indexOf(elementToRemove), 1);
//   }
  
//   return finalResult;
// }

// //output: 3 4 6 9 13
// alert(getLongestGrowingSequence(input));

// </script>

  return (
    <>
      <Header />
      <Hero data={heroData} />
      <WirSind />
      <MedalsAndText />
      <TrainingSessions data={trainingSessionsData} />
      <TrainingSessions data={trainingSessionsSecondData} type='erwachseneWhite'/>
      <Invite/>
      <RegistrationAndTraining type='uber_uns' />
      <ChacraForm />
      <Footer />
    </>
  )
}
