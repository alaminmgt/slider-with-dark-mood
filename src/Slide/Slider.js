import React,{useState,useEffect, useRef} from 'react'
import data from "./Data.json"

const Slider = () => {
    console.log(data[0].download_url);
    const [next, setNext] = useState(0);
    const ref = useRef(null);

    const handleNext = () => {
        setNext((previuosValue)=>{
            if (previuosValue === data.length -1) {
                return 0;
            }else{
                return previuosValue +1;
            }    
        })
    }
    const handlePrev = () => {
        if (next === 0) {
            setNext(data.length -1)
        }else{
            setNext(next -1)
        }
    }
    const startInterVal = () => {
        ref.current = setInterval(handleNext,1000);
    }
    const stopInterVal = () => {
        clearInterval(ref.current)
    }
    useEffect(() => {
      startInterVal();
      return ()=> stopInterVal;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div className='sliderDiv' onMouseEnter={stopInterVal} onMouseLeave={startInterVal}>
      <div className='left-div'>
        <button onClick={handlePrev}>{"<"}</button>
      </div>
      <img src={data[next].download_url} alt="Slider" />
      <div className='right-div'>
        <button onClick={handleNext}>{">"}</button>
      </div>
      
    </div>
  )
}

export default Slider
