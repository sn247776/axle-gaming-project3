'use client'
import React, { useEffect, useState } from 'react'

type Props = {
    count: number,
    width?: string,
    height?: string,
    barWidth?: string,
    barHeight?: string,
    color?: string,
    gradient?: string,
    halfed?: boolean
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

const StarRating = ({ count = 0, width = "100%", height = "15px", barWidth = `15px`, barHeight = `15px`, color = `#898989`, gradient = `linear-gradient(0.25turn, #537eff, #b619ff, #ee00ff)`, halfed = false }: Props) => {
    const [barStyle, setBarStyle] = useState<BarStyleType[]>([])

    useEffect(() => {
        var arr: BarStyleType[] = []
        var cnt = count
        for (var i = 0; i < 5; i++) {
            arr.push({
                left: `${i * 20}%`,
                width: `${barWidth}`,
                height: `${barHeight}`,
                background: color,
                backgroundImage: cnt > 0 ? gradient : ` `,
                backgroundSize: `100px  100%`,
                backgroundPosition: `${i * 20}% 50%`
            })
            cnt -= 1
        }
        setBarStyle(arr)

    }, [barWidth, barHeight, color, halfed, gradient, count])
    return (
        <div
            style={{ width: width, height: height }}
            className={` relative parent-div flex justify-evenly`}>
            {barStyle.map((style, index) => (

                <div
                    key={index}
                    style={{
                        ...style,
                        WebkitClipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    }}
                    className={` absolute`} />

            ))}
        </div>
    )
}

export default StarRating