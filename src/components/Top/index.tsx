import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button<{visible:boolean,darkmode:boolean}>`
    position: fixed;
    right: 50px;
    bottom: 140px;
    background-color: ${p => p.darkmode ? 'gray' : 'lightblue'};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    display: ${p => p.visible ? 'inline' : 'none'};
`

const Top = ({darkmode}:{darkmode:boolean}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled>300?setVisible(true):setVisible(false)
  };

  const scrollToTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <Button visible={visible} darkmode={darkmode} onClick={scrollToTop}>Top</Button>
  )
}

export default Top