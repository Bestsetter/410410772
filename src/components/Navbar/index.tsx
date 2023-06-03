import React,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdDarkMode,MdLightMode } from 'react-icons/md';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
  img{
    width: 60px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Links = styled(Link)`
  text-decoration: none;
  color: gray;
  &:after{
    display:block;
    content: '';
    border-bottom: 2px solid lightblue;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after{
    transform: scaleX(1);
  }
  /* &:nth-last-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  &:nth-last-child(2):hover{
    background-color: #ffffff;
    border: 1px solid lightblue;
  } */
`

const Button = styled.button<{darkmode:boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background-color: ${p => p.darkmode ? "gray" : "#B2B2B2"};
  border: none;
  cursor: pointer;
  svg{
    width: 20px;
    height: 20px;
  }
`

const Navbar = ({ darkmode,setDarkmode }: { darkmode:boolean,setDarkmode: (darkmode: boolean) => void}) => {
  const switchmode = () =>{
    setDarkmode(!darkmode)
  }
  return (
    <Container>
      <img src="https://www.doveflyunitedsupplier.com/wp-content/uploads/2019/10/LOGO%E6%9C%AA%E5%8E%BB%E8%83%8C.jpg" alt="" />
      <Menu>
        <Links to="/">Home</Links>
        <Links to="/characters">Characters</Links>
        <Links to="/music">Music</Links>
        <Links to="/episodes">Episodes</Links>
        <Button onClick={switchmode} darkmode={darkmode}>
          {darkmode?<MdDarkMode />:<MdLightMode />}
        </Button>
      </Menu>
    </Container>
  )
}

export default Navbar