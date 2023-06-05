import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)<{darkmode:boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.darkmode ? "#FFFFFF" : "#222222" };
`

const Card = styled.div`
  margin: 20px 0;
  .iframe{
    width:600px;
    height:336px;
  }
  @media screen and (max-width:640px) {
    width: 450px;
    .iframe{
      width:450px;
      height:252px;
    }
  }
`

const MusicData = [
  {
    id:1,
    title:"片頭曲",
    name:"〈混合堅果〉",
    link:"https://www.youtube.com/embed/XStDdat_mMo"
  },
  {
    id:2,
    title:"片頭曲",
    name:"〈SOUVENIR〉",
    link:"https://www.youtube.com/embed/FuQSbLLc4dE"
  },
  {
    id:3,
    title:"片頭曲",
    name:"〈喜劇〉",
    link:"https://www.youtube.com/embed/CMMU3G0N_lc"
  },
  {
    id:4,
    title:"片頭曲",
    name:"〈色彩〉",
    link:"https://www.youtube.com/embed/Tkp7gEC1E_0"
  }
]

interface data{
  id:number;
  title:string;
  name:string;
  link:string;
}

const Music = ({darkmode}:{darkmode:boolean}) => {
  // const Musics = Music.map(()=>
  // );
  return (
    <Container
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration: 1, ease:'easeOut' }}
      darkmode={darkmode}
    >
      {MusicData.map((data:data)=>{
            return(
                <Card key={data.id} >
                    <div style={{fontSize:'36px'}}>{data.title}</div>
                    <div style={{fontSize:'24px',marginBottom:'16px'}}>{data.name}</div>
                    <iframe className='iframe' src={data.link} frameBorder="0" allow='autoplay;' allowFullScreen={false}></iframe>
                </Card>
            )
        })}
    </Container>
  )
}

export default Music