import React, { CSSProperties } from 'react'

type buttonDesign = {
    btnStyle : CSSProperties
}

const ButtonStyle = (props: buttonDesign) => {
  return (
    <div>

        <button style={props.btnStyle}>Button Style</button>
      
    </div>
  )
}

export default ButtonStyle
