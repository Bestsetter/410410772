import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdDarkMode,MdLightMode } from 'react-icons/md'

const Container = styled.div<{darkmode:boolean}>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
  padding-top: 20px;
  align-items: center;
  img{
    height: 60px;
    filter: ${p => p.darkmode ? "invert(60%)" : ""};
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
    transition: transform 0.5s ease-in-out;
  }
  &:hover::after{
    transform: scaleX(1);
  }
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

const Header = ({ darkmode,setDarkmode }: { darkmode:boolean,setDarkmode: (darkmode: boolean) => void}) => {
  const switchmode = () =>{
    setDarkmode(!darkmode)
  }
  return (
    <Container darkmode={darkmode}>
      <img src="https://spy-family.net/assets/img/common/header_logo.png" alt="" />
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

export default Header