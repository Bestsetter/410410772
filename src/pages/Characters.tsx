import React, { useState } from 'react'
import styled from 'styled-components'
import Top from '../components/Top'
import { motion } from 'framer-motion'

const Container = styled(motion.div)<{darkmode:boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: ${p => p.darkmode ? "#222222" : "#FFFFFF"}; */
`

const Card = styled.div<{darkmode:boolean,open:boolean}>`
  display: flex;
  gap: 20px;
  margin: 40px 0;
  width:  ${p => p.open ? "800px" : "500px"};
  justify-content: space-between;
  color:  ${p => p.darkmode ? "#FFFFFF" : "#222222" };
  transition:0.75s;
  img{
    width: ${p => p.open ? "400px" : "200px"};
    box-shadow: ${p => p.open ? "" : "12px 12px 7px #222222;"};
    transition:0.5s;
    &:hover{
      width: ${p => p.open ? "" : "244px"};
      box-shadow: ${p => p.open ? "" : "8px 8px 7px #222222;"};
      cursor: pointer;
    }
  }
  .phrase{
    display: ${p => p.open ? "none" : "block"};
    margin-top: 4px;
  }
  .content{
    display: ${p => p.open ? "block" : "none"};
    margin-top: 40px;
  }
  :nth-child(odd){
    flex-direction: row-reverse;
  }
`

const CharacterData = [
  {
    id:1,
    name:"洛伊德·佛傑",
    nickname:"黃昏",
    cover:"https://spy-family.net/assets/img/bddvd/jk_vol1.jpg",
    phrase:"為了東西兩國的和平...",
    content:"本作主角，佛傑一家之主。在東國從事諜報活動的西國頂尖間諜，代號〈黃昏〉，為了成為間諜而捨棄自己的本名，現在使用伯林特綜合醫院心理醫生洛伊德·佛傑的身分活動著。"
  },
  {
    id:2,
    name:"安妮亞·佛傑",
    nickname:"實驗體007",
    cover:"https://spy-family.net/assets/img/bddvd/jk_vol2.jpg",
    phrase:"挖哭挖哭",
    content:"本作主角之一，佛傑一家的最小成員。經歷某組織實驗而獲得讀心能力的超能力少女。洛伊德和約兒的養女，為了進入伊甸學園就讀而謊稱是6歲，但實際年齡應為4、5歲左右。"
  },
  {
    id:3,
    name:"約兒·佛傑",
    nickname:"睡美人",
    cover:"https://spy-family.net/assets/img/bddvd/jk_vol3.jpg",
    phrase:"為了隱瞞殺手身份...",
    content:"本作主角之一，佛傑一家主婦。舊姓布萊爾，27歲。表面上是伯林特市政府的女性公務員，實際上是一名技藝高超的職業殺手，代號〈睡美人〉，隸屬於暗殺組織〈花園〉。"
  },
  {
    id:4,
    name:"彭德·佛傑",
    nickname:"APPLE實驗體8號",
    cover:"https://spy-family.net/assets/img/bddvd/jk_vol4.jpg",
    phrase:"汪～",
    content:"擁有預知能力的大型犬，佛傑一家的寵物，原是東國某組織的[[動物模型|動物實驗體]。名字取自安妮亞喜愛的諜報動畫《Spy Wars》主角「彭德曼」。"
  },
  {
    id:5,
    name:"尤利·布萊爾",
    nickname:"秘密警察",
    cover:"https://spy-family.net/assets/img/bddvd/jk_vol5.jpg",
    phrase:"為了姊姊...",
    content:"國家保安局的少尉，約兒的弟弟，20歲。年齡比她小七歲，〈黃昏〉名義上的小舅子（妻舅），安妮亞名義上的舅舅。"
  },
  {
    id:6,
    name:"費歐娜·佛洛斯特",
    nickname:"夜帷",
    cover:"https://spy-family.net/assets/img/bddvd/jk_vol6.jpg",
    phrase:"黃昏前輩...",
    content:"WISE的女間諜，〈黃昏〉的同僚，代號為〈夜帷Nightfall〉，表面身份是伯林特綜合醫院的職員。與〈黃昏〉對話時總是面不改色，但其實非常喜歡〈黃昏〉，夢想是成為〈黃昏〉的妻子。髮型採用和約兒有鮮明對比的銀白色短髮。無論是外表與說話態度都相當冷酷，幾乎令WISE所有人畏懼忌憚，但只是因為謹記〈黃昏〉所教導的「間諜不能感情外露」所致，其實內心有很多小劇場，外冷內熱。"
  }
]

interface data{
  id:number;
  name:string;
  nickname:string;
  cover:string;
  phrase:string;
  content:string;
}

const Characters = ({darkmode}:{darkmode:boolean}) => {
  const [openkey, setOpenkey] = useState<number>();
  const handleClick = (key:number) =>{
      setOpenkey(openkey !== key ? key : undefined);
  }
  return (
    <Container 
      darkmode={darkmode}
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1, ease:'easeOut' }}
    >
      {CharacterData.map((data:data)=>{
          return(
              <Card key={data.id} darkmode={darkmode} open={openkey === data.id}>
                  <img src={data.cover} alt="" onClick={() => handleClick(data.id)} draggable="false"/>
                  <div style={{padding:'20px 0'}}>
                      <div style={{display:'flex',alignItems:'end',fontSize:'24px',gap:'4px'}}>
                          {data.name}
                          <div style={{fontSize:'16px',color:'gray'}}>{data.nickname}</div>
                      </div>
                      <div className='phrase'>"{data.phrase}"</div>
                      <div className='content'>
                        {data.content}
                      </div>
                  </div>
              </Card>
          )
      })}
      <Top darkmode={darkmode} />
    </Container>
  )
}

export default Characters