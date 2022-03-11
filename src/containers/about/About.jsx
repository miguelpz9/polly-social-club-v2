import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import socialClubTitle from '../../assets/socialClubSubTitle.png';

const About = () => {
    const [alredyAnimated, setAlredyAnimated] = useState();
    const {ref, inView} = useInView();
    const animationRight = useAnimation();
    const animationLeft = useAnimation();

    useEffect(() => {
      if(inView){
          animationRight.start({
            x:0,
            transition:{
              type: "spring", 
              stiffness: 25, 
              duration: 2 
            },
            initial:{
              x:'100vh'
            }
          })
          animationLeft.start({
            x:0,
            transition:{
              type: "spring", 
              stiffness: 25, 
              duration: 2 
            },
            initial:{
              x:'-100vh'
            }
          })
          setAlredyAnimated(true);
      }
      if(!inView&&!alredyAnimated){
        animationRight.start({
          x:'100vh',
        })
        animationLeft.start({
          x:'-100vh',
        })
      }
      if(!inView&&alredyAnimated){
        animationRight.start({
          x:0,
        })
        animationLeft.start({
          x:0,
        })
      }
    })

    return (
        <div ref={ref} className="bg-header bg-contain bg-top bg-no-repeat xl:h-[55vh] h-[70vh] w-screen flex flex-col justify-start" id="header">
            <div className="w-[25%] xl:w-[30%] lg:w-1/2 flex flex-col  mt-[10%] justify-center self-center">
                <motion.img animate={animationRight}  src={pollyTitle} alt="this is car image" className="lg:p-0 p-0 self-center"/>
                <motion.img animate={animationRight}  src={socialClubTitle} alt="this is car image" className="lg:p-0 p-4 pt-2 self-center"/>
                <button type="button" class="text-tiffany  hover:text-white font-text bg-white hover:bg-tiffany focus:ring-4 focus:ring-blue-300 rounded-2xl text-2xl m-2 h-12 text-center">Join the Club</button>
            </div>
        </div>
    );
  };
  
export default About;