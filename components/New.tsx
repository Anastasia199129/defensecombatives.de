// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import {useState} from 'react'

// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'
// import { Slide } from 'material-auto-rotating-carousel'

// import Button from '@material-ui/core/Button'
// import Header from './Header/Header';


// import { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


// const { red, blue, green } = require('@material-ui/core/colors');

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 50,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height: 255,
//     display: 'block',
//     maxWidth: 400,
//     overflow: 'hidden',
//     width: '100%',
//   },
// }));

// export class DemoCarousel extends Component {
//   render() {
//       return (
//           <Carousel autoPlay={true} emulateTouch={true}  interval={2000}>
//             {/* infiniteLoop={true} */}
//               <div>
//                   <img style={{width: '100px', height: '100px'}} src="/next.svg" />
//                   {/* <p className="legend">Legend 1</p> */}
//               </div>
//               <div>
//               <img style={{width: '100px', height: '100px'}} src="/next.svg" />
//                   <p className="legend">Legend 2</p>
//               </div>
//               <div>
//               <img style={{width: '100px', height: '100px'}} src="/next.svg" />
//                   <p className="legend">Legend 3</p>
//               </div>
//           </Carousel>
//       );
//   }
// }

// // ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));


// function New() {
//   // const classes = useStyles();
//   // const theme = useTheme();
//   // const [activeStep, setActiveStep] = React.useState(0);
//   // const maxSteps = tutorialSteps.length;

//   const [state, setState] = useState({open: true})

//   // const handleNext = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   // };

//   // const handleBack = () => {
//   //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   // };

//   // const handleStepChange = (step: number) => {
//   //   setActiveStep(step);
//   // };

//   // style={{ position: 'relative', width: '100%', height: 500 }}

//   return (
//     <>
//     <Header/>
//     <div style={{height: '500px', position: 'relative'}}>
//     {/* <Button onClick={() => setState({ open: true })}>Open carousel</Button> */}
//    <div style={{ position: 'absolute', height: '500px' }}>
//    {/* <AutoRotatingCarousel
//       label='Get started'
//       interval='7000'
//       open={state.open}
//       ButtonProps={{variant: 'text'}}
//       ModalProps={{ disablePortal: true, hideBackdrop: true, keepMounted: true}}
//       // landscape={true}
//       // mobile={true}
      
//       // onClose={() => setState({ open: false })}
//       // onStart={() => setState({ open: false })}
//       style={{ position: 'absolute', height: '500px' }}
//     >
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
//         mediaBackgroundStyle={{ backgroundColor: red[400] }}
//         style={{ backgroundColor: red[600] }}
//         title='This is a very cool feature'
//         subtitle='Just using this will blow your mind.'
//       />
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
//         mediaBackgroundStyle={{ backgroundColor: blue[400] }}
//         style={{ backgroundColor: blue[600] }}
//         title='Ever wanted to be popular?'
//         subtitle='Well just mix two colors and your are good to go!'
//       />
//       <Slide
//         media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
//         mediaBackgroundStyle={{ backgroundColor: green[400] }}
//         style={{ backgroundColor: green[600] }}
//         title='May the force be with you'
//         subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
//       />
//     </AutoRotatingCarousel> */}

//    </div>
    
//   </div>
//   <Header/>
//   </>
//   );
// }

// export default New;