import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)<{darkmode:boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.darkmode ? "#FFFFFF" : "#222222" };
  /* background-color: ${p => p.darkmode ? "black" : "#FFFFFF"} ; */
`

const Box = styled.div`
  width: 800px;
  gap: 20px;
`

const Home = ({darkmode}:{darkmode:boolean}) => {
  const [i,setI] = useState([randomNumberInRange(1,25),randomNumberInRange(1,6)]);
  const url = `https://spy-family.net/assets/img/episodes/episode${i[0]}_${i[1]}.jpg`
  function randomNumberInRange(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var change = setInterval(()=>{
    setI([randomNumberInRange(1,25),randomNumberInRange(1,6)])
    clearInterval(change)
  },3500)


  return (
    <Container 
      darkmode={darkmode}
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1, ease:'easeOut' }}
    >
      <Box>
        <img src={url} alt="" />
        <div style={{marginTop:'16px'}}>為了緩和處於敵對關係的西國（Westalis）與東國（Ostania）之間的緊張局勢，隸屬西國情報機構的一流間諜「黃昏」奉命調查東國政治人物唐納文·戴斯蒙德之政治陰謀。然而，戴斯蒙德深居簡出，唯一會公開露面的場合只有其子所就讀的東國名校——伊甸學園舉辦的懇親會，因此只有讓「自己的小孩」進入伊甸學園就讀，並以家長的身份參加懇親會，才有機會與其接觸。黃昏為順利執行任務，以精神科醫生兼一家之主「洛伊德·佛傑」的身份掩人耳目，並於先後找到「女兒」安妮亞與「妻子」約兒組建起一個臨時家庭，殊不知安妮亞其實是有讀心能力的超能力者「實驗體007」；而看似溫柔善良的妻子，另一身份竟然是代號為「睡美人」的職業殺手。三人互相隱瞞真實身份，就此過起虛假的家庭生活。</div>
      </Box>
    </Container>
  )
}

export default Home