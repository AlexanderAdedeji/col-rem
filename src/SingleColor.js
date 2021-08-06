import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] =useState(false);
  const bcg = rgb.join(',')

  const copyHex = ()=>{
    setAlert(true)
    navigator.clipboard.writeText(hex)
    setTimeout(()=>{
      setAlert(false)
    }, 2000)
  }
  const hex = rgbToHex(...rgb)
  return (
    <article className={`color ${index > 10 && 'color-light'}`}
     style={{backgroundColor:`rgb(${bcg})`}}
      onClick={copyHex}
     >
        <p className='percent-value'>
          {weight}%
        </p>
        <p className='color-value'>{hex}</p>
        {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  
    )
}

export default SingleColor
