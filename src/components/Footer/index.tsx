import React,{useState} from 'react'
import styled from 'styled-components'

const Container = styled.div<{mode:boolean}>`
  background-color: ${p => p.mode ? "gray" : "lightblue"} ;
  padding: 40px 0 40px 0;
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
`
const Menu = styled.div`
  display: flex;
  gap: 20px;
`

const Footer = ({darkmode}:{darkmode:boolean}) => {
  return (
    <Container mode={darkmode}>
    <div>0</div>
    <Menu>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Menu>
  </Container>
  )
}

export default Footer