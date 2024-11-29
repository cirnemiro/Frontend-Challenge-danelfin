"use client"

import { useState, useEffect } from 'react'
import styles from './SkeletonStyles'
const Skeleton = ({ height, width, circle, count }) => {
    const [countDiv, setCountDiv] = useState([1])
    const divStyle = {
        height: height,
        width: width,
        borderRadius: circle ? '50%' : 6,
    };

    useEffect(() => {
        const renderDivs = () => {
            let countDiv = []
            for (let index = 0; index < count; index++) {
                countDiv.push(index)
            }
            setCountDiv(countDiv)
        }
        renderDivs()
    }, [count])



    return (
        <>
            {countDiv.map((div, i) => {
                return (
                    <div key={`${i}_skeleton}`} className="placeholder-item" style={divStyle}><style jsx>{styles}</style></div>
                )
            })}
        </>
    )
}

export default Skeleton