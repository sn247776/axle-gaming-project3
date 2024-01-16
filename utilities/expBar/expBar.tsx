import React, { useEffect, useState } from 'react'
import './style.scss'
type Props = {
    percent: number,
    width?: string,
    height?: string,
    barWidth?: string,
    barHeight?: string,
    color?: string,
    gradient?: string,
    halfed?:boolean
}
type BarStyleType = {
    left: string,
    width: string,
    height: string,
    background: string,
    backgroundImage: string,
    backgroundSize: string,
    backgroundPosition: string,
}
const ExpBar = ({percent = 0,width = "100%", height = "10px", barWidth = `10px`, barHeight= `10px`, color = `#898989`, gradient = `linear-gradient(0.25turn, #537eff, #b619ff, #ee00ff)`, halfed = false}: Props) => {
  const count = percent /( halfed ? 20 : 10)

  const [barStyle,setBarStyle] = useState<BarStyleType[]>([])

  useEffect(()=>{
    var arr: BarStyleType[] = []
    var cnt= count
    for(var i=0;i<(halfed ? 5 : 10);i++){
      arr.push({
      left:`${i*( halfed ? 20 : 10)}%`,
      width:`${barWidth}`,
      height:`${barHeight}`,
      background: color,
      backgroundImage: cnt >0 ? gradient : ` `,
      backgroundSize:  `100px  100%`,
      backgroundPosition: `${i*( halfed ? 20 : 10)}% 50%`
     })
      cnt-=1
    }
    setBarStyle(arr)
    
  },[barWidth,barHeight,color,halfed,gradient,percent])
  return (
    <div 
    style={{width: width, height: height}}
    className={ ` relative parent-div flex justify-evenly`}>
      {barStyle.map((style,index)=>(
        <div key={index}>
          <div  
        style={{...style,
        WebkitClipPath:'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
        }}
        className={` absolute`}/>
        {Math.floor(count)==index ?
        <div 
        style={{
          left: `${index*( halfed ? 20 : 10)}%`,
          width: barWidth,
          height: barHeight,
          transform: 'scale(2)',
          backgroundImage: gradient,
          backgroundSize:`100vh 100%`,
          backgroundPosition: `${index*( halfed ? 20 : 10)}% 50%`,
          WebkitClipPath:'polygon(14% 0, 0% 100%, 13% 100%, 28% 13%, 85% 12%, 73% 85%, 11% 85%, 9% 100%, 86% 100%, 100% 0)',
        }}
         className=' absolute z-0'
         />:<></>}
        </div>
      ))}
        <div id=' base-bar ' 
        className={ ` w-full h-full  base-div` }
        />
    </div>
  )
}

export default ExpBar