import React from 'react'
import styled from 'styled-components'
import Top from '../components/Top'
import { motion } from 'framer-motion'

const Container = styled(motion.div)<{darkmode:boolean}>`
  width: 100%;
  height: 100vh;
  /* background-color: ${p => p.darkmode ? "black" : "#FFFFFF"} ; */
`

const Home = ({darkmode}:{darkmode:boolean}) => {
  return (
    <Container 
      darkmode={darkmode}
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1, ease:'easeOut' }}
    >
      Home
      <Top />
    </Container>
  )
}

export default Home