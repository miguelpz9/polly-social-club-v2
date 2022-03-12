import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import pollyCard from '../../assets/pollyCard.png';
import { TextSection } from '../../components';

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
        <div ref={ref} className="w-full flex flex-col justify-start mt-[3%]" id="about">
            <div className="2xl:w-[65%] xl:w-[75%] py-12 max-w-6xl text-left grid grid-cols-2 justify-center align-middle self-center">
              <div className="p-20 rotate-12">
                <motion.img animate={animationRight}  src={pollyCard} alt="this is car image" className="self-center"/>
              </div>
              <TextSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, ex vitae placerat cursus, lectus purus varius ipsum, quis viverra nunc nunc et nisi. Integer pretium sodales imperdiet. Nam vel est non quam viverra consectetur a vitae nulla. Morbi vehicula, ex elementum varius sagittis, elit elit ornare felis, non malesuada lectus lacus at dui. " title="POLLY SOCIAL CLUB" />
            </div>
        </div>
    );
  };
  
export default About;