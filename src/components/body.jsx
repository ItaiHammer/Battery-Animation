import React, {useState, useEffect, useRef} from 'react';
import { motion } from "framer-motion"

//files
import './body.css'

export default function Body () {
    const fill = useRef();
    const [value, setValue] = useState(100);
    const [scale, setScale] = useState(1);
    const slider = useRef();

    useEffect(()=>{
        if (fill.current != null) {
            try {
                if (value < 50) {
                    fill.current.style.background = '#b15d5d';
                }else {
                    fill.current.style.background = '#5db16f';
                }
            }catch (error) {
                console.log(error);
            }
        }
    }, [value, fill.current]);

    function battryClick () {
        setScale(1.5);
        setTimeout(setScale(1), 500);
    }

    function sliderHover () {
        slider.current.style.cursor = 'grab'
    }

    function sliderClick () {
        slider.current.style.cursor = 'grabbing'
    }

    function sliderStopClick () {
        slider.current.style.cursor = 'grab'
    }

    return <div className="body">
        <motion.div className="battery-container" onClick={()=>{setScale(1.1); setTimeout(()=>setScale(1), 200)}} animate={{scale: scale}} transition={{duration: 0.2}} >
            <div className="box" >
                <motion.div ref={fill} className="box-fill" initial={{width: `0%`}} animate={{width: `${value}%`}} transition={{duration: 0.5}} ></motion.div>
            </div>
            <div className="chupchik"></div>
        </motion.div>
        <input className="slider" ref={slider} type="range" min="0" max="100" value={value} onMouseOver={sliderHover} onMouseDown={sliderClick} onMouseUp={sliderStopClick} onChange={(e)=>{setValue(e.target.value)}} ></input>
        <div className="buttons-container">
            <button onClick={()=>{setValue(0)}} >0%</button>
            <button onClick={()=>{setValue(100)}} >100%</button>
        </div>
    </div>
}