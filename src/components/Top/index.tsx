import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button<{visible:boolean}>`
    position: fixed;
    right: 40px;
    bottom: 100px;
    background-color: lightblue;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    display: ${p => p.visible ? 'inline' : 'none'};
`

const Top = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <Button visible={visible} onClick={scrollToTop}>Top</Button>
  )
}

export default Top