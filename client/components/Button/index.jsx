import React from 'react'
import { Button } from './style'

const ButtonComp = ({
  width = "100px",
  height = "50px",
  bgColor = "transparent",
  color = "black",
  borderColor = "lightgrey",
  isFlat = false,
  buttonText = "button",
  onClick,
  showButton=true,
  hasMarginRight=false,
  isCircle
}) => {
  return (
    <Button
      width={width}
      height={height}
      bgColor={bgColor}
      color={color}
      borderColor={borderColor}
      isFlat={isFlat}
      onClick={() => onClick()}
      showButton={showButton}
      hasMarginRight={hasMarginRight}
      isCircle={isCircle}
    >
      {buttonText}
    </Button>
  )
}

export default ButtonComp