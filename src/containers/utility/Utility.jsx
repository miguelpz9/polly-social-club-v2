import {React, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import pollyTitle from '../../assets/pollyTitle.png';
import pollyCard from '../../assets/pollyCard.png';
import ReactSlider from "react-slider";
import { TextSection } from '../../components';

const Utility = () => {
    const [alredyAnimated, setAlredyAnimated] = useState();
    const {ref, inView} = useInView();
    const animationRight = useAnimation();
    const animationLeft = useAnimation();
    const [rangevalNfts, setRangevalNfts] = useState(null);
    const [rangevalMonths, setRangevalMonths] = useState(null);
    const [usdcNfts, setUsdcNfts] = useState(null);
    const [usdcMonth, setUsdcMonth] = useState(null);
    const [usdcTotal, setUsdcTotal] = useState(null);

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

    function handleChangeNfts (e) {
      setRangevalNfts(e);
      if(e < 3){
        setUsdcNfts(4);
      }else if(e < 6){
        setUsdcNfts(4.5);
      }else{
        setUsdcNfts(5);
      }
      calculate();
    }

    function handleChangeMonths (e) {
      setRangevalMonths(e);
      calculate();
    }

    function calculate(){
      console.log(usdcNfts);
      console.log(rangevalNfts);
      let perMonth = usdcNfts*rangevalNfts;
      console.log(perMonth);
      console.log(rangevalMonths);
      let total = usdcNfts*rangevalNfts*rangevalMonths;
      console.log(total);
      setUsdcMonth(perMonth);
      setUsdcTotal(total);
    }

    return (
        <div ref={ref} className="self-center text-center align max-w-6xl">
            <TextSection text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, ex vitae placerat cursus, lectus purus varius ipsum, quis viverra nunc nunc et nisi. Integer pretium sodales imperdiet. Nam vel est non quam viverra consectetur a vitae nulla. Morbi vehicula, ex elementum varius sagittis, elit elit ornare felis, non malesuada lectus lacus at dui. " title="UTILITY"  />
            <div className="w-full my-12 px-24">
              <h4 className="font-title text-6xl p-2 text-left border-[1px] border-b-0  border-tiffany bg-tiffany60 rounded-t-3xl text-white">Estimate your rewards</h4>
              <div className="text-white text-left bg-black border-[1px] grid grid-cols-2 grid-rows-[7] border-tiffany rounded-b-3xl">
                <p className="font-title text-5xl ml-4 m-2 text-white col-start-1 row-start-1">USDC PER NFT/MONTH:</p>
                <p className="font-title text-5xl ml-4 m-2 text-white col-start-1 row-start-2">USDC PER MONTH:</p>
                <p className="font-title text-5xl ml-4 m-2 text-white col-start-1 row-start-3">USDC IN TOTAL:</p>
                <p className="font-title text-4xl ml-4 m-2 text-white col-start-1 row-start-4">NUMBER OF NFTs:</p>
                <input type="range" className="mx-auto m-4 col-start-1 row-start-5 w-[95%] col-span-2" min="1" max="200" onChange={(event) => handleChangeNfts(event.target.value)} />
                <p className="font-title text-4xl ml-4 m-2 text-white col-start-1 row-start-6">NUMBER OF MONTHS:</p>
                <input type="range" className="mx-auto m-4 col-start-1 row-start-7 w-[95%] col-span-2" min="1" max="12" onChange={(event) => handleChangeMonths(event.target.value)} />
                <p className="font-title text-right text-5xl mr-4 m-2 text-tiffany col-start-2 row-start-1">{usdcNfts}</p>
                <p className="font-title text-right text-5xl mr-4 m-2 text-tiffany col-start-2 row-start-2">{usdcMonth}</p>
                <p className="font-title text-right text-5xl mr-4 m-2 text-tiffany col-start-2 row-start-3">{usdcTotal}</p>
                <p className="font-title text-right text-4xl mr-4 m-2 text-tiffany col-start-2 row-start-4">{rangevalNfts + " POLYCARDS"}</p>
                <p className="font-title text-right text-4xl mr-4 m-2 text-tiffany col-start-2 row-start-6">{rangevalMonths + " MONTHS"}</p>
              </div>
            </div>
        </div>
    );
  };
  
export default Utility;