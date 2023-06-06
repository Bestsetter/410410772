import React from 'react'
import styled from 'styled-components'
import { BsTwitter,BsFacebook,BsLine } from 'react-icons/bs'

const Container = styled.div<{darkmode:boolean}>`
  background-color: ${p => p.darkmode ? "gray" : "lightblue"} ;
  padding: 40px 0 40px 0;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img{
    height: 60px;
  }
`
const Menu = styled.div<{darkmode:boolean}>`
  display: flex;
  gap: 20px;
  svg{
    width: 24px;
    height: auto;
  }
  a{
    text-decoration: none;
    color:  ${p => p.darkmode ? "#ffffff" : "#000000"} ;
  }
`

const Footer = ({darkmode}:{darkmode:boolean}) => {
  return (
    <Container darkmode={darkmode}>
      <img src="https://spy-family.net/assets/img/common/header_logo.png" alt="" />
      <Menu darkmode={darkmode}>
        <a href="https://twitter.com/share?url=https://spy-family.net/&text=アニメ『SPY×FAMILY』&hashtags=" target='_blank' rel="noreferrer"><BsTwitter /></a>
        <a href="https://www.facebook.com/share.php?u=https://spy-family.net/" target='_blank' rel="noreferrer" ><BsFacebook /></a>
        <a href="https://line.me/R/msg/text/?アニメ『SPY×FAMILY』 https://spy-family.net/" target='_blank' rel="noreferrer"><BsLine /></a>
      </Menu>
    </Container>
  )
}

export default Footer