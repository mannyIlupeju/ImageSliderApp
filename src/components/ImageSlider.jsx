import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)


 

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundColor: 'black',
    borderRadius: '30px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    
   
  }

  const sliderStyle = {
    height: '100%',
    position: 'relative',
  }

  const leftArrowColor = {
    color: 'red',
    backgroundColor: 'white',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    top: '50%',
    left: '12px',
    cursor: 'pointer',
  }

  const rightArrowColor = {
    color: 'red',
    backgroundColor: 'white',
    transform: 'translate(0, -50%)',
    position: 'absolute',
    top: '50%',
    right: '12px',
    cursor: 'pointer',
  }
  
  const prevImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1
    setCurrentIndex(newIndex)
  }

  const nextImage = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
      
      
  }


  return (
    <div style = {sliderStyle}>
      <FaChevronLeft onClick = {prevImage} style={leftArrowColor}/>
      <FaChevronRight onClick={nextImage} style={rightArrowColor}/>
      <div style={slideStyle}></div>
    </div>
    
  )




}

export default ImageSlider
